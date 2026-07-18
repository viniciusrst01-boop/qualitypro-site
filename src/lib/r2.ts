import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

function getR2Config() {
  const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID;
  const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
  const bucket = process.env.CLOUDFLARE_R2_BUCKET;

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    return null;
  }

  return {
    accountId,
    accessKeyId,
    secretAccessKey,
    bucket,
  };
}

export function hasR2Config() {
  return Boolean(getR2Config());
}

function getDownloadFileName(fileName: string) {
  return fileName.split(/[\\/]/).pop() || fileName;
}

export async function createPrivateDownloadUrl(fileName: string) {
  const config = getR2Config();

  if (!config) {
    throw new Error("Cloudflare R2 environment variables are missing.");
  }

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });

  const command = new GetObjectCommand({
    Bucket: config.bucket,
    Key: fileName,
    ResponseContentDisposition: `attachment; filename="${getDownloadFileName(fileName)}"`,
    ResponseContentType: "application/zip",
  });

  return getSignedUrl(client, command, { expiresIn: 60 * 5 });
}
