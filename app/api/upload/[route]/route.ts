import { NextResponse } from "next/server";
import path from "path";
import { mkdir, writeFile } from "fs/promises";

export const runtime = "nodejs";

const allowedRoutes = new Set(["1", "2", "3"]);

function sanitizeFileName(name: string) {
  return path.basename(name).replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(
  request: Request,
  context: { params: Promise<{ route: string }> }
) {
  const { route } = await context.params;
  

  if (!allowedRoutes.has(route)) {
    return NextResponse.json({ error: "Invalid upload route." }, { status: 400 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads", route);
  await mkdir(uploadsDir, { recursive: true });

  const safeName = sanitizeFileName(file.name || "upload");
  const filePath = path.join(uploadsDir, safeName);

  const arrayBuffer = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(arrayBuffer));

  return NextResponse.json({
    message: "Upload successful.",
    path: `/uploads/${route}/${safeName}`,
  });
}
