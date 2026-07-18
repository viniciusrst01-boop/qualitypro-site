import { Resend } from "resend";
import { verifyDownloadToken } from "@/lib/download-token";
import { getPaidProduct } from "@/lib/products";

export const runtime = "nodejs";

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "QualityPro Solutions <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      { message: "Envio de e-mail indisponivel no momento." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Dados invalidos." }, { status: 400 });
  }

  const email =
    body && typeof body === "object" && "email" in body
      ? String(body.email).trim()
      : "";
  const token =
    body && typeof body === "object" && "token" in body
      ? String(body.token).trim()
      : "";

  if (!isValidEmail(email)) {
    return Response.json({ message: "Informe um e-mail valido." }, { status: 400 });
  }

  const payload = verifyDownloadToken(token);

  if (!payload) {
    return Response.json(
      { message: "Link expirado ou invalido. Recarregue a pagina de compra." },
      { status: 401 },
    );
  }

  const product = getPaidProduct(payload.productId);

  if (!product) {
    return Response.json({ message: "Material nao encontrado." }, { status: 404 });
  }

  const productName = product.name;
  const downloadUrl = `${getSiteUrl()}/api/download/${encodeURIComponent(token)}`;
  const safeProductName = escapeHtml(productName);
  const safeDownloadUrl = escapeHtml(downloadUrl);

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `Seu material QualityPro Solutions - ${productName}`,
      text: [
        "Obrigado pela compra.",
        "",
        `Material: ${productName}`,
        "Seu link de download fica disponivel por 3 dias:",
        downloadUrl,
        "",
        "QualityPro Solutions",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="font-size: 22px; margin: 0 0 12px;">Obrigado pela compra</h1>
          <p>Seu material <strong>${safeProductName}</strong> esta pronto para download.</p>
          <p>O link abaixo fica disponivel por <strong>3 dias</strong>:</p>
          <p>
            <a href="${safeDownloadUrl}" style="display:inline-block;background:#0ea5e9;color:#ffffff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:700;">
              Baixar material
            </a>
          </p>
          <p style="font-size: 13px; color: #475569;">Se o botao nao funcionar, copie e cole este link no navegador:<br />${safeDownloadUrl}</p>
          <p style="font-size: 13px; color: #64748b;">QualityPro Solutions</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Manual product delivery email failed:", error);
    return Response.json(
      { message: "Nao foi possivel enviar o e-mail agora." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
