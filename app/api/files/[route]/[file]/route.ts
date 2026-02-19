import { NextResponse } from "next/server";
import path from "path";
import { readFile } from "fs/promises";

export const runtime = "nodejs";

const allowedRoutes = new Set(["love", "passion", "kindness"]);

const getUploadsRoot = () => {
  const configured = process.env.UPLOADS_DIR;
  if (configured && configured.trim().length > 0) {
    return path.resolve(configured);
  }
  return path.join(process.cwd(), "public", "uploads");
};

const contentTypeByExt: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".avi": "video/x-msvideo",
  ".mkv": "video/x-matroska",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".aac": "audio/aac",
  ".m4a": "audio/mp4",
  ".flac": "audio/flac",
  ".ogg": "audio/ogg",
};

export async function GET(
  request: Request,
  context: { params: Promise<{ route: string; file: string }> }
) {
  const { route, file } = await context.params;

  if (!allowedRoutes.has(route)) {
    return NextResponse.json({ error: "Invalid route." }, { status: 400 });
  }

  const uploadsRoot = getUploadsRoot();
  const routeRoot = path.resolve(uploadsRoot, route);
  const safePath = path.resolve(routeRoot, path.basename(file));

  // Prevent directory traversal attacks
  if (!safePath.startsWith(routeRoot + path.sep)) {
    return NextResponse.json({ error: "Invalid path." }, { status: 400 });
  }

  try {
    const fileBuffer = await readFile(safePath);
    const ext = path.extname(safePath).toLowerCase();
    const contentType = contentTypeByExt[ext] || "application/octet-stream";

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }
}
