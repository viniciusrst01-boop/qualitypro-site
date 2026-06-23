import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function hasValidBrazilianPhone(phone: string) {
  if (!phone) {
    return true;
  }

  const digits = phone.replace(/\D/g, "");
  const nationalDigits =
    digits.startsWith("55") && digits.length > 11 ? digits.slice(2) : digits;

  return /^[1-9]\d{9,10}$/.test(nationalDigits);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] || character,
  );
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json(
      { message: "Formato de solicitação inválido." },
      { status: 415 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "Não foi possível interpretar os dados enviados." },
      { status: 400 },
    );
  }

  const name = cleanText(payload.name, 100);
  const email = cleanText(payload.email, 160).toLowerCase();
  const phone = cleanText(payload.phone, 30);
  const company = cleanText(payload.company, 120);
  const message = cleanText(payload.message, 2000);
  const website = cleanText(payload.website, 200);

  if (website) {
    return Response.json({ message: "Mensagem enviada com sucesso." });
  }

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    !hasValidBrazilianPhone(phone) ||
    message.length < 10
  ) {
    return Response.json(
      {
        message:
          "Revise os campos obrigatórios. Se informar um telefone, inclua o DDD.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "QualityPro Solutions - Site <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error("Contact form email environment variables are missing.");
    return Response.json(
      { message: "O envio ainda não está configurado. Tente novamente depois." },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Não informado");
  const safeCompany = escapeHtml(company || "Não informada");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Novo contato pelo site - ${name}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone || "Não informado"}`,
        `Empresa: ${company || "Não informada"}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="font-size: 22px; margin-bottom: 20px;">Novo contato pelo site</h1>
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${safeEmail}</p>
          <p><strong>Telefone:</strong> ${safePhone}</p>
          <p><strong>Empresa:</strong> ${safeCompany}</p>
          <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 24px 0;" />
          <p><strong>Mensagem:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact form error:", error);
      return Response.json(
        {
          message:
            "Não foi possível enviar agora. Tente novamente em instantes.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unexpected contact form error:", error);
    return Response.json(
      { message: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Mensagem enviada com sucesso." });
}
