interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export default function Terminal({ children, className = "" }: TerminalProps) {
  return (
    <div className={`rounded-xl overflow-hidden border border-border bg-surface-2 ${className}`}>
      <div className="flex items-center h-8 px-4 bg-[#111] border-b border-border gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}

interface TerminalLineProps {
  prompt?: string;
  children: React.ReactNode;
}

export function TerminalLine({ prompt = "$", children }: TerminalLineProps) {
  return (
    <div className="flex gap-2">
      <span className="text-cyan select-none">{prompt}</span>
      <span className="text-text-primary">{children}</span>
    </div>
  );
}

interface TerminalOutputProps {
  children: React.ReactNode;
}

export function TerminalOutput({ children }: TerminalOutputProps) {
  return <div className="text-green mt-1">{children}</div>;
}
