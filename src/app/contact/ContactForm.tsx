"use client";

import { useState, type FormEvent } from "react";

import { Select, type SelectOption } from "@/components/Select";
import { cn } from "@/lib/cn";

const ROLE_OPTIONS: SelectOption[] = [
  { value: "player", label: "Player / Playtester" },
  { value: "investor", label: "Investor" },
  { value: "partner", label: "Partner" },
  { value: "clinician-researcher", label: "Clinician / Research" },
];

const FORM_NAME = "contact";

function encodeFormData(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * "Join the Quest" signup — the Contact Us page mockup's email capture,
 * role picker, and CTA (Figma node 406:1128). Submits to Netlify Forms
 * (https://docs.netlify.com/forms/setup/#submit-html-forms-with-javascript-fetch).
 * Netlify's build-time form detection can't crawl this dynamically
 * rendered page, so the form is registered via public/__forms.html
 * instead (see https://opennext.js.org/netlify/forms), and submissions
 * POST there rather than to this route.
 */
export function ContactForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(ROLE_OPTIONS[0].value);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": FORM_NAME, email, role }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStatus("success");
      setEmail("");
      setRole(ROLE_OPTIONS[0].value);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="font-sans text-heading-sm font-light text-text-primary">
        Thanks for joining the quest — we&rsquo;ll be in touch!
      </p>
    );
  }

  return (
    <form
      name={FORM_NAME}
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <input
        type="email"
        name="email"
        required
        placeholder="Your Email Address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={cn(
          "w-full max-w-[650px] rounded-sm border border-accent-primary bg-background-elevated/50 px-6 py-4",
          "font-sans text-heading-sm font-light text-text-primary shadow-elevated backdrop-blur-glass-sm outline-none",
          "placeholder:text-[#537e9f] focus-visible:border-accent-secondary"
        )}
      />

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Select
          options={ROLE_OPTIONS}
          value={role}
          onValueChange={setRole}
          name="role"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-accent-primary px-10 py-4",
            "font-sans text-heading-sm font-normal text-text-primary shadow-elevated",
            "transition-colors duration-(--transition-fast) ease-standard hover:bg-accent-primary/85",
            "disabled:cursor-not-allowed disabled:opacity-70"
          )}
        >
          {status === "submitting" ? "Sending..." : "Join the Quest"}
        </button>
      </div>

      {status === "error" && (
        <p className="font-sans text-body-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
