import { NextResponse } from "next/server";
import path from "path";
import { mkdir, writeFile } from "fs/promises";

export const runtime = "nodejs";
export const dynamic = 'force-dynamic';

const allowedRoutes = new Set(["1", "2", "3"]);

function sanitizeFileName(name: string) {
  return path.basename(name).replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(
  request: Request,
  context: { params: Promise<{ route: string }> }
) {
  try {
    const { route } = await context.params;
    

    if (!allowedRoutes.has(route)) {
      return NextResponse.json({ error: "Invalid upload route." }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    // Check if running on Vercel
    if (process.env.VERCEL) {
      return NextResponse.json({ 
        error: "File uploads require external storage on Vercel. Please configure Vercel Blob Storage or another storage solution." 
      }, { status: 501 });
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
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ 
      error: "Upload failed: " + (error instanceof Error ? error.message : "Unknown error") 
    }, { status: 500 });
  }
}
