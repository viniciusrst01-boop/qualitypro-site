import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { verifyDownloadToken } from "@/lib/download-token";
import { getPaidProduct } from "@/lib/products";
import { createPrivateDownloadUrl, hasR2Config } from "@/lib/r2";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    token: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { token } = await context.params;
  const payload = verifyDownloadToken(decodeURIComponent(token));

  if (!payload) {
    return new Response("Link invalido ou expirado.", { status: 403 });
  }

  const product = getPaidProduct(payload.productId);

  if (!product) {
    return new Response("Produto nao encontrado.", { status: 404 });
  }

  if (hasR2Config()) {
    const signedUrl = await createPrivateDownloadUrl(product.fileName);

    return Response.redirect(signedUrl, 302);
  }

  const filePath = path.join(process.cwd(), "private-products", product.fileName);

  try {
    await stat(filePath);
  } catch {
    return new Response(
      "Arquivo indisponivel neste ambiente. Configure o armazenamento privado antes de publicar.",
      { status: 503 },
    );
  }

  const file = await readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${product.fileName}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
