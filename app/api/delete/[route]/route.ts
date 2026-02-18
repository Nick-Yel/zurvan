import { NextRequest, NextResponse } from "next/server";
import { unlink } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ route: string }> }
) {
  try {
    const { route } = await context.params;
    const { fileName } = await request.json();

    if (!fileName) {
      return NextResponse.json(
        { error: "File name is required" },
        { status: 400 }
      );
    }

    const filePath = join(process.cwd(), "public", "uploads", route, fileName);

    await unlink(filePath);

    return NextResponse.json({ success: true, message: "File deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
}
