import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const dynamic = 'force-dynamic';

// Email validation regex
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();

    // Validate email format
    if (!validateEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if running on Vercel
    if (process.env.VERCEL) {
      return NextResponse.json(
        { 
          error: "File system storage not available on Vercel. Please configure external storage (e.g., Vercel Blob, database).",
          email: trimmedEmail 
        },
        { status: 501 }
      );
    }

    // Local development: Save to file
    const logsDir = path.join(process.cwd(), "logs");
    const logFile = path.join(logsDir, "subscribers.log");

    // Ensure logs directory exists
    await mkdir(logsDir, { recursive: true });

    // Create log entry
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} | ${trimmedEmail}\n`;

    // Append to log file
    await writeFile(logFile, logEntry, { flag: "a" });

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully subscribed!",
        email: trimmedEmail 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
