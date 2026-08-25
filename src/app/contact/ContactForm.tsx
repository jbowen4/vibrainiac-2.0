"use client";

import { useState, type FormEvent } from "react";

import { Select, type SelectOption } from "@/components/Select";
import { cn } from "@/lib/cn";

const ROLE_OPTIONS: SelectOption[] = [
  { value: "player", label: "Player / Playtester" },
  { value: "funder", label: "Funder" },
  { value: "partner", label: "Potential Partner" },
  { value: "researcher", label: "Researcher" },
];

/**
 * "Join the Quest" signup — the Contact Us page mockup's email capture,
 * role picker, and CTA (Figma node 406:1128).
 */
export function ContactForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(ROLE_OPTIONS[0].value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-6"
    >
      <input
        type="email"
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
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-accent-primary px-10 py-4",
            "font-sans text-heading-sm font-normal text-text-primary shadow-elevated",
            "transition-colors duration-(--transition-fast) ease-standard hover:bg-accent-primary/85"
          )}
        >
          Join the Quest
        </button>
      </div>
    </form>
  );
}
