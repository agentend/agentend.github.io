export default function FleetPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Fleet</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        The fleet is Agentend&apos;s typed worker system. Instead of one model doing
        everything, the fleet assigns specialized model workers to specific task
        slots — classification, extraction, verification, summarization, generation,
        and tool calling. Each slot is backed by benchmark data to recommend the
        best model for the job.
      </p>

      {/* Worker slots */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        6 Worker Slots
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Every Agentend application has 6 worker slots. Each slot has a primary
        recommendation, a budget option, a fallback, and a local/self-hosted pick.
        Benchmark data is sourced from March 2026 evaluations.
      </p>

      {/* Classify */}
      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        classify
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Fast intent classification. Needs low latency and high classification accuracy.
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Strategy</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Model</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Provider</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Latency</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Accuracy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Primary</td>
            <td className="py-3 border-b border-border text-accent font-mono">claude-haiku-4-5</td>
            <td className="py-3 border-b border-border text-text-secondary">Anthropic</td>
            <td className="py-3 border-b border-border text-text-secondary">180ms</td>
            <td className="py-3 border-b border-border text-text-secondary">92.1%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Fallback</td>
            <td className="py-3 border-b border-border text-accent font-mono">gpt-4o-mini</td>
            <td className="py-3 border-b border-border text-text-secondary">OpenAI</td>
            <td className="py-3 border-b border-border text-text-secondary">150ms</td>
            <td className="py-3 border-b border-border text-text-secondary">90.5%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Budget</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-2.0-flash</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">120ms</td>
            <td className="py-3 border-b border-border text-text-secondary">91.0%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Local</td>
            <td className="py-3 border-b border-border text-accent font-mono">qwen2.5-7b</td>
            <td className="py-3 border-b border-border text-text-secondary">Alibaba</td>
            <td className="py-3 border-b border-border text-text-secondary">200ms</td>
            <td className="py-3 border-b border-border text-text-secondary">87.3%</td>
          </tr>
        </tbody>
      </table>

      {/* Extract */}
      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        extract
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Structured data extraction. Needs high JSON accuracy and reliable output formatting.
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Strategy</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Model</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Provider</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">JSON Acc.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Primary</td>
            <td className="py-3 border-b border-border text-accent font-mono">claude-sonnet-4-6</td>
            <td className="py-3 border-b border-border text-text-secondary">Anthropic</td>
            <td className="py-3 border-b border-border text-text-secondary">96.2%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Fallback</td>
            <td className="py-3 border-b border-border text-accent font-mono">gpt-4o</td>
            <td className="py-3 border-b border-border text-text-secondary">OpenAI</td>
            <td className="py-3 border-b border-border text-text-secondary">94.8%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Budget</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-2.5-flash</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">93.1%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Local</td>
            <td className="py-3 border-b border-border text-accent font-mono">qwen2.5-72b</td>
            <td className="py-3 border-b border-border text-text-secondary">Alibaba</td>
            <td className="py-3 border-b border-border text-text-secondary">91.5%</td>
          </tr>
        </tbody>
      </table>

      {/* Verify */}
      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        verify
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Fact-checking and validation. Needs high reasoning power and factual accuracy.
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Strategy</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Model</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Provider</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Key Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Primary</td>
            <td className="py-3 border-b border-border text-accent font-mono">claude-opus-4-6</td>
            <td className="py-3 border-b border-border text-text-secondary">Anthropic</td>
            <td className="py-3 border-b border-border text-text-secondary">GPQA Diamond 83.8</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Fallback</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-3-pro</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">GPQA Diamond 82.1</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Budget</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-2.5-flash</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">Facts 58.3</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Local</td>
            <td className="py-3 border-b border-border text-accent font-mono">llama-4-maverick</td>
            <td className="py-3 border-b border-border text-text-secondary">Meta</td>
            <td className="py-3 border-b border-border text-text-secondary">Facts 52.1</td>
          </tr>
        </tbody>
      </table>

      {/* Summarize */}
      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        summarize
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Content condensation. Optimized for summarization quality.
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Strategy</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Model</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Provider</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Quality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Primary</td>
            <td className="py-3 border-b border-border text-accent font-mono">claude-sonnet-4-6</td>
            <td className="py-3 border-b border-border text-text-secondary">Anthropic</td>
            <td className="py-3 border-b border-border text-text-secondary">94.1</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Fallback</td>
            <td className="py-3 border-b border-border text-accent font-mono">gpt-4o</td>
            <td className="py-3 border-b border-border text-text-secondary">OpenAI</td>
            <td className="py-3 border-b border-border text-text-secondary">--</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Budget</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-2.0-flash</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">89.5</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Local</td>
            <td className="py-3 border-b border-border text-accent font-mono">phi-4-14b</td>
            <td className="py-3 border-b border-border text-text-secondary">Microsoft</td>
            <td className="py-3 border-b border-border text-text-secondary">85.2</td>
          </tr>
        </tbody>
      </table>

      {/* Generate */}
      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        generate
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Content and code generation. Needs highest reasoning and generation quality.
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Strategy</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Model</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Provider</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Key Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Primary</td>
            <td className="py-3 border-b border-border text-accent font-mono">claude-opus-4-6</td>
            <td className="py-3 border-b border-border text-text-secondary">Anthropic</td>
            <td className="py-3 border-b border-border text-text-secondary">SWE-bench 80.8, HumanEval 92.0</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Fallback</td>
            <td className="py-3 border-b border-border text-accent font-mono">glm-4.7</td>
            <td className="py-3 border-b border-border text-text-secondary">Zhipu</td>
            <td className="py-3 border-b border-border text-text-secondary">HumanEval 94.2, SWE-bench 76.5</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Budget</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-2.5-flash</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">HumanEval 85.3</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Local</td>
            <td className="py-3 border-b border-border text-accent font-mono">qwen2.5-coder-32b</td>
            <td className="py-3 border-b border-border text-text-secondary">Alibaba</td>
            <td className="py-3 border-b border-border text-text-secondary">HumanEval 88.1</td>
          </tr>
        </tbody>
      </table>

      {/* Tool call */}
      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        tool_call
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Function and tool calling. Needs reliable tool use and high success rate.
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Strategy</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Model</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Provider</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Tool Use Acc.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Primary</td>
            <td className="py-3 border-b border-border text-accent font-mono">claude-sonnet-4-6</td>
            <td className="py-3 border-b border-border text-text-secondary">Anthropic</td>
            <td className="py-3 border-b border-border text-text-secondary">96.8%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Fallback</td>
            <td className="py-3 border-b border-border text-accent font-mono">gpt-4o</td>
            <td className="py-3 border-b border-border text-text-secondary">OpenAI</td>
            <td className="py-3 border-b border-border text-text-secondary">95.1%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Budget</td>
            <td className="py-3 border-b border-border text-accent font-mono">gemini-2.5-flash</td>
            <td className="py-3 border-b border-border text-text-secondary">Google</td>
            <td className="py-3 border-b border-border text-text-secondary">92.3%</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">Local</td>
            <td className="py-3 border-b border-border text-accent font-mono">llama-4-maverick</td>
            <td className="py-3 border-b border-border text-text-secondary">Meta</td>
            <td className="py-3 border-b border-border text-text-secondary">88.7%</td>
          </tr>
        </tbody>
      </table>

      {/* fleet.yaml */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        fleet.yaml configuration
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The fleet is configured in <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code> at the
        project root. Each worker slot specifies a model, instance count, timeout,
        and retry policy.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`fleet:
  name: default
  description: Default agentend fleet configuration

  workers:
    classify:
      count: 1
      model: gpt-4-turbo
      timeout: 30
      retry_policy: exponential_backoff

    extract:
      count: 2
      model: gpt-4-turbo
      timeout: 60
      retry_policy: exponential_backoff

    verify:
      count: 1
      model: gpt-4-turbo
      timeout: 45
      retry_policy: exponential_backoff

    summarize:
      count: 2
      model: gpt-3.5-turbo
      timeout: 60
      retry_policy: exponential_backoff

    generate:
      count: 4
      model: gpt-4-turbo
      timeout: 120
      retry_policy: exponential_backoff

    tool_call:
      count: 2
      model: gpt-4-turbo
      timeout: 90
      retry_policy: exponential_backoff`}</code>
      </pre>

      {/* 3-level override */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        3-level configuration override
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend uses a 3-level configuration override system. Each level can
        override settings from the level above it:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Level</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Source</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">1. Global</td>
            <td className="py-3 border-b border-border text-accent font-mono">fleet.yaml</td>
            <td className="py-3 border-b border-border text-text-secondary">Base configuration for all workers</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">2. Per-slot</td>
            <td className="py-3 border-b border-border text-accent font-mono">fleet.yaml workers.*</td>
            <td className="py-3 border-b border-border text-text-secondary">Overrides for a specific worker slot</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary">3. Per-request</td>
            <td className="py-3 border-b border-border text-accent font-mono">WorkerConfig</td>
            <td className="py-3 border-b border-border text-text-secondary">Runtime overrides via the API or capability code</td>
          </tr>
        </tbody>
      </table>

      {/* RouteLLM */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        RouteLLM smart routing
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend integrates with RouteLLM for intelligent model routing. Based on
        the complexity of the incoming request, RouteLLM can dynamically route to a
        cheaper model for simple tasks or escalate to a more capable model for hard
        problems — all within the same worker slot.
      </p>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">BenchmarkRegistry</code> powers
        this routing by providing cost, latency, and quality data for each model.
        Use <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">apply_to_fleet_config()</code> to
        automatically fill in benchmark-recommended models:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`from agentend import BenchmarkRegistry

registry = BenchmarkRegistry()

# Apply budget-optimized models to your fleet config
config = registry.apply_to_fleet_config(fleet_config, strategy="budget")

# Or get a recommendation for a specific slot
rec = registry.get_recommendation("extract")
print(rec.primary.model_id)    # claude-sonnet-4-6
print(rec.budget_pick.model_id) # gemini-2.5-flash`}</code>
      </pre>
    </div>
  );
}
