export default function ProtocolTriangle() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Top center: AG-UI */}
      <div className="flex justify-center mb-6">
        <div className="bg-surface border border-cyan/20 rounded-xl p-5 w-72 text-center">
          <p className="text-cyan font-mono font-medium text-sm">AG-UI</p>
          <p className="text-text-muted text-xs mt-1 uppercase tracking-wider">
            User-facing
          </p>
          <p className="text-text-muted text-sm mt-3">
            SSE event streaming to frontends
          </p>
        </div>
      </div>

      {/* Dashed connector lines */}
      <div className="flex justify-center mb-6">
        <div className="relative w-72 h-8">
          {/* Left diagonal */}
          <div className="absolute left-0 top-0 w-1/2 h-full border-r border-dashed border-cyan/20" />
          {/* Right diagonal */}
          <div className="absolute right-0 top-0 w-1/2 h-full border-l border-dashed border-cyan/20" />
        </div>
      </div>

      {/* Bottom row: MCP and A2A */}
      <div className="flex justify-center gap-6">
        <div className="bg-surface border border-cyan/20 rounded-xl p-5 w-72 text-center">
          <p className="text-cyan font-mono font-medium text-sm">MCP</p>
          <p className="text-text-muted text-xs mt-1 uppercase tracking-wider">
            Tool-facing
          </p>
          <p className="text-text-muted text-sm mt-3">
            Aggregate external tools or expose agent as tool
          </p>
        </div>

        <div className="bg-surface border border-cyan/20 rounded-xl p-5 w-72 text-center">
          <p className="text-cyan font-mono font-medium text-sm">A2A</p>
          <p className="text-text-muted text-xs mt-1 uppercase tracking-wider">
            Agent-facing
          </p>
          <p className="text-text-muted text-sm mt-3">
            Agent card discovery and task delegation
          </p>
        </div>
      </div>

      {/* Bottom connector line */}
      <div className="flex justify-center mt-6">
        <div className="w-[calc(50%+9rem)] border-t border-dashed border-cyan/20" />
      </div>
    </div>
  );
}
