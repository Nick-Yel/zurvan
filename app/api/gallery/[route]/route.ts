import { NextResponse } from "next/server";
import path from "path";
import { readdir } from "fs/promises";

export const runtime = "nodejs";

const allowedRoutes = new Set(["1", "2", "3"]);

export async function GET(
  request: Request,
  context: { params: Promise<{ route: string }> }
) {
  const { route } = await context.params;

  if (!allowedRoutes.has(route)) {
    return NextResponse.json({ error: "Invalid route." }, { status: 400 });
  }

  try {
    const uploadsDir = path.join(process.cwd(), "public", "uploads", route);
    const files = await readdir(uploadsDir);
    const filtered = files.filter((f) => f !== ".gitkeep");
    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read files." }, { status: 500 });
  }
}
