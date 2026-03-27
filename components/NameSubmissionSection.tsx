"use client";

import { FormEvent, useState } from "react";

type SubmissionState =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function NameSubmissionSection() {
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbz6u49UTguF5KTi4l-UwxdEbQ-q-qzqoJLnmLXmN83XcxAmAyVHXzvehVCtnNcno15qVQ/exec";
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setSubmissionState({ type: "error", message: "Please enter your name before submitting." });
      return;
    }

    if (!googleScriptUrl) {
      setSubmissionState({
        type: "error",
        message: "Submission is not configured yet. Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL first.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState({ type: "idle", message: "" });

    try {
      const payload = new URLSearchParams({
        name: trimmedName,
        submittedAt: new Date().toISOString(),
      });

      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      setName("");
      setSubmissionState({ type: "success", message: "Your name was submitted successfully." });
    } catch (error) {
      const fallbackMessage = "We could not submit your name. Please try again.";
      const errorMessage = error instanceof Error ? error.message : fallbackMessage;
      setSubmissionState({ type: "error", message: errorMessage || fallbackMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="name-submit" className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-md backdrop-blur sm:p-8">
      <div className="space-y-4">
        <h2 className="font-display text-4xl leading-none text-slate-900">Name Submission</h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          Enter your name below and submit it to the organizer list. You must be here in person when we call names to recieve your prize!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <label htmlFor="name-input" className="sr-only">
            Enter your name
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
            maxLength={80}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 sm:max-w-md"
            disabled={isSubmitting}
            aria-describedby="name-submit-status"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Enter"}
          </button>
        </form>

        <p
          id="name-submit-status"
          role="status"
          aria-live="polite"
          className={`min-h-6 text-sm ${
            submissionState.type === "success"
              ? "text-emerald-700"
              : submissionState.type === "error"
                ? "text-rose-700"
                : "text-slate-500"
          }`}
        >
          {submissionState.message}
        </p>
      </div>
    </section>
  );
}
