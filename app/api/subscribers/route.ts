import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check if running on Vercel
    if (process.env.VERCEL) {
      return NextResponse.json(
        { 
          error: "File system storage not available on Vercel.",
          subscribers: []
        },
        { status: 501 }
      );
    }

    const logFile = path.join(process.cwd(), "logs", "subscribers.log");

    try {
      const content = await readFile(logFile, "utf-8");
      
      // Parse log entries
      const lines = content.trim().split("\n").filter(line => line.trim());
      const subscribers = lines.map(line => {
        const [timestamp, email] = line.split(" | ");
        return { timestamp, email };
      }).reverse(); // Show newest first

      return NextResponse.json({ subscribers }, { status: 200 });
    } catch (error) {
      // File doesn't exist yet
      return NextResponse.json({ subscribers: [] }, { status: 200 });
    }
  } catch (error) {
    console.error("Error reading subscribers:", error);
    return NextResponse.json(
      { error: "Internal server error", subscribers: [] },
      { status: 500 }
    );
  }
}
