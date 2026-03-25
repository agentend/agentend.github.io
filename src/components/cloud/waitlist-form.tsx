"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    // Store in localStorage
    try {
      const existing = JSON.parse(
        localStorage.getItem("agentend-waitlist") || "[]"
      );
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem("agentend-waitlist", JSON.stringify(existing));
      }
    } catch {
      localStorage.setItem("agentend-waitlist", JSON.stringify([email]));
    }

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
          <Check className="w-4 h-4" />
          <span>You&apos;re on the list!</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm font-mono placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-brand text-white px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "..." : "Join Waitlist"}
      </button>
    </form>
  );
}
