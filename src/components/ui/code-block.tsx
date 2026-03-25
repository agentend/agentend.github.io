"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { highlight } from "@/lib/highlight";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    highlight(code, language).then((result) => {
      if (!cancelled) setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-surface-2">
      {filename && (
        <div className="flex items-center h-10 px-4 bg-[#111] border-b border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-text-muted text-xs font-mono ml-3">{filename}</span>
        </div>
      )}
      <div className="relative group">
        {html ? (
          <pre
            className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-text-secondary"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-text-secondary">
            <code>{code}</code>
          </pre>
        )}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-md bg-surface-2 hover:bg-border text-text-muted hover:text-text-secondary"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
