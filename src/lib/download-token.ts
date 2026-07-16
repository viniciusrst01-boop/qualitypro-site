import { createHmac, timingSafeEqual } from "node:crypto";

type DownloadTokenPayload = {
  productId: string;
  email: string;
  exp: number;
};

function getSecret() {
  return (
    process.env.DOWNLOAD_TOKEN_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    process.env.MERCADO_PAGO_WEBHOOK_SECRET ||
    ""
  );
}

function toBase64Url(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(value: string) {
  const secret = getSecret();

  if (!secret) {
    throw new Error("Download token secret is missing.");
  }

  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function createDownloadToken(
  productId: string,
  email: string,
  expiresInSeconds = 60 * 60 * 24 * 3,
) {
  const payload: DownloadTokenPayload = {
    productId,
    email,
    exp: Math.floor(Date.now() / 1000) + expiresInSeconds,
  };
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = sign(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyDownloadToken(token: string) {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = sign(encodedPayload);
  const received = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);

  if (
    received.length !== expected.length ||
    !timingSafeEqual(received, expected)
  ) {
    return null;
  }

  const payload = JSON.parse(fromBase64Url(encodedPayload)) as DownloadTokenPayload;

  if (!payload.productId || !payload.email || payload.exp < Date.now() / 1000) {
    return null;
  }

  return payload;
}
