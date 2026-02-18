"use client";

import { useRef, useState } from "react";

type ToastType = "success" | "error";

type ToastState = {
  type: ToastType;
  message: string;
} | null;

type UploadFormProps = {
  route: "1" | "2" | "3";
};

export default function UploadForm({ route }: UploadFormProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>(
      "input[type='file']"
    );

    if (!fileInput?.files?.[0]) {
      showToast("error", "Please choose a file to upload.");
      return;
    }

    const data = new FormData();
    data.append("file", fileInput.files[0]);

    try {
      setIsUploading(true);
      const response = await fetch(`/api/upload/${route}`, {
        method: "POST",
        body: data,
      });

      const payload = await response.json();

      if (!response.ok) {
        showToast("error", payload?.error ?? "Upload failed.");
        return;
      }

      showToast("success", `Uploaded: ${payload.path}`);
      form.reset();
    } catch {
      showToast("error", "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mt-6">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input className="block" type="file" name="file" required />
        <button
          className="w-fit rounded bg-black px-4 py-2 text-white disabled:opacity-60"
          type="submit"
          disabled={isUploading}
        >
          {isUploading ? "Adding Memory..." : "Add Memory"}
        </button>
      </form>

      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 rounded px-4 py-3 text-sm text-white shadow-md ${
            toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
