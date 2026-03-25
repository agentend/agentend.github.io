export default function MemoryPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Memory</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend implements a 5-tier context system called the ContextBus. Memory
        is progressively hydrated — fast, always-available tiers load first, while
        slower, richer tiers load asynchronously. If Redis or PostgreSQL are
        unavailable, the system degrades gracefully rather than failing.
      </p>

      {/* Tier overview */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        5-tier overview
      </h2>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Tier</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Backend</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Latency</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Working</td>
            <td className="py-3 border-b border-border text-text-secondary">In-process dict</td>
            <td className="py-3 border-b border-border text-text-secondary">&lt;1ms</td>
            <td className="py-3 border-b border-border text-text-secondary">Current request state, scratchpad values</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Session</td>
            <td className="py-3 border-b border-border text-text-secondary">Redis</td>
            <td className="py-3 border-b border-border text-text-secondary">1-5ms</td>
            <td className="py-3 border-b border-border text-text-secondary">Conversation history within a session</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Semantic</td>
            <td className="py-3 border-b border-border text-text-secondary">pgvector</td>
            <td className="py-3 border-b border-border text-text-secondary">5-50ms</td>
            <td className="py-3 border-b border-border text-text-secondary">Similarity search over past interactions</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Core Blocks</td>
            <td className="py-3 border-b border-border text-text-secondary">System prompt</td>
            <td className="py-3 border-b border-border text-text-secondary">0ms</td>
            <td className="py-3 border-b border-border text-text-secondary">Domain context, capability instructions</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Consolidation</td>
            <td className="py-3 border-b border-border text-text-secondary">Mem0 / Built-in</td>
            <td className="py-3 border-b border-border text-text-secondary">Async</td>
            <td className="py-3 border-b border-border text-text-secondary">Long-term memory extraction and archival</td>
          </tr>
        </tbody>
      </table>

      {/* Progressive hydration */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Progressive hydration
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        When a request arrives, the ContextBus hydrates memory in 4 stages. Each
        stage runs only if the previous one has completed and the backend is
        available:
      </p>
      <ol className="space-y-3 text-text-secondary ml-4 mb-6 list-decimal pl-2">
        <li>
          <strong className="text-text-primary">Stage 1 — Core blocks + Working memory</strong>
          <br />
          <span className="text-text-muted text-sm">Always available, &lt;1ms. Loads system prompt blocks and current request state.</span>
        </li>
        <li>
          <strong className="text-text-primary">Stage 2 — Session history</strong>
          <br />
          <span className="text-text-muted text-sm">Redis-backed, ~10ms. Loads conversation history for the active session.</span>
        </li>
        <li>
          <strong className="text-text-primary">Stage 3 — Semantic search</strong>
          <br />
          <span className="text-text-muted text-sm">pgvector-backed, ~100ms. Finds relevant past interactions via embedding similarity.</span>
        </li>
        <li>
          <strong className="text-text-primary">Stage 4 — Agent-driven retrieval</strong>
          <br />
          <span className="text-text-muted text-sm">The agent can call a retrieve_context tool to pull in additional context on demand.</span>
        </li>
      </ol>

      {/* Working memory */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Working memory
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Working memory is an in-process Python dictionary that lives for the
        duration of the request. It stores scratchpad values, intermediate
        computation results, and per-request state. There is no network overhead.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# Working memory is automatically available in capabilities
self.working_memory.set("extracted_total", 1250.00)
total = self.working_memory.get("extracted_total")`}</code>
      </pre>

      {/* Session memory */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Session memory
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Session memory persists conversation history in Redis, keyed by session ID.
        It supports configurable TTL, max size limits, and FIFO eviction. If Redis
        is unavailable, the system continues with working memory only.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# fleet.yaml
memory:
  session:
    enabled: true
    type: redis
    ttl: 3600        # 1 hour
    max_size_mb: 10
    strategy: fifo`}</code>
      </pre>

      {/* Semantic memory */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Semantic memory
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Semantic memory stores embeddings of past interactions in PostgreSQL with
        the pgvector extension. When a new request arrives, the ContextBus performs
        a similarity search to find relevant historical context. Assistant messages
        are automatically embedded and stored after each interaction.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# fleet.yaml
memory:
  semantic:
    enabled: true
    type: pgvector
    vector_size: 1536
    similarity_threshold: 0.7
    consolidation_schedule: daily`}</code>
      </pre>

      {/* Core blocks */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Core blocks
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Core blocks are static system prompt fragments that are always included.
        They come from two sources: the framework (security instructions, output
        format rules) and the capability (<code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">get_domain_context()</code>).
        Core blocks have zero latency because they are loaded at startup.
      </p>

      {/* Consolidation */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Consolidation
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The consolidation tier runs asynchronously after request completion. It
        extracts important facts and patterns from conversations and stores them as
        long-term memories. Agentend supports two consolidation engines:
      </p>
      <ul className="space-y-2 text-text-secondary ml-4 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Mem0</strong> — External memory service with managed embeddings and retrieval. Requires a Mem0 API key.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Built-in engine</strong> — Uses the configured LLM to extract and summarize memories. No external dependency.</span>
        </li>
      </ul>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# fleet.yaml
memory:
  consolidation:
    enabled: true
    schedule: daily
    archive_after_days: 30
    compression_ratio: 0.8`}</code>
      </pre>

      {/* Graceful degradation */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Graceful degradation
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The ContextBus is designed to never crash due to a missing backend. If
        Redis is unreachable, session memory is silently disabled. If PostgreSQL is
        down, semantic memory is skipped. The agent continues operating with whatever
        tiers are available — at minimum, working memory and core blocks are always
        present.
      </p>
    </div>
  );
}
