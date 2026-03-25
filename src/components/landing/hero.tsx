"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";

const steps = ["Intent", "Classify", "Memory", "Workers", "Events", "Frontend"];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Radial glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[150px] pointer-events-none bg-gradient-subtle opacity-60" />

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-sm tracking-[0.2em] uppercase mb-6"
        >
          Agent as a Backend
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display italic text-5xl md:text-7xl leading-[1.1] mb-8 text-text-primary"
        >
          Your agent doesn&apos;t need
          <br className="hidden md:block" /> a backend.{" "}
          <span className="text-accent">It is the backend.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Define capabilities, not endpoints. Agentend handles intent routing,
          memory hydration, model orchestration, and event streaming — so you
          ship agent-powered products, not infrastructure.
        </motion.p>

        {/* Pipeline animation - 6 nodes connected by lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-0 mb-14 overflow-x-auto py-4"
        >
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              {i > 0 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 + i * 0.18 }}
                  className="w-8 md:w-12 h-px bg-accent/40 origin-left"
                />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.18 }}
                className="relative px-3 py-2 md:px-4 md:py-2.5 rounded-lg border border-accent/20 bg-surface font-mono text-xs md:text-sm text-text-secondary whitespace-nowrap"
              >
                <div
                  className="absolute inset-0 rounded-lg bg-accent/5 animate-glow-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <span className="relative">{step}</span>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/agentend/agentend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text-secondary px-6 py-3 rounded-lg text-sm hover:text-text-primary hover:border-text-muted transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
