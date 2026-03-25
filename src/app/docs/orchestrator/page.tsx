export default function OrchestratorPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Orchestrator</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        The orchestrator is Agentend&apos;s multi-step workflow engine. It executes
        workflows as directed acyclic graphs (DAGs), running independent steps in
        parallel and dependent steps in sequence. It supports checkpointing, retry
        logic, and human-in-the-loop interrupts.
      </p>

      {/* DAG execution */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        DAG workflow engine
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">DAGExecutor</code> takes
        a Workflow definition and executes it step by step. Steps are grouped into
        parallel groups based on their dependency declarations — steps with no
        unmet dependencies run concurrently.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`from agentend.orchestrator.dag import DAGExecutor
from agentend.orchestrator.workflow import Workflow, Step

workflow = Workflow(name="invoice_pipeline")

# Steps are added with dependency declarations
workflow.add_step(Step(name="extract", worker=extract_fn))
workflow.add_step(Step(name="verify", worker=verify_fn, depends_on=["extract"]))
workflow.add_step(Step(name="summarize", worker=summarize_fn, depends_on=["extract"]))
workflow.add_step(Step(name="notify", worker=notify_fn, depends_on=["verify", "summarize"]))

executor = DAGExecutor()
results = await executor.execute(workflow)`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        In this example, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">extract</code> runs
        first. Once it completes, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">verify</code> and <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">summarize</code> run
        in parallel. Finally, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">notify</code> runs
        after both have finished.
      </p>

      {/* Step definitions */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Step definitions
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Each step in a workflow is a <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">Step</code> object
        with the following properties:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Property</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Type</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">name</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">str</td>
            <td className="py-3 border-b border-border text-text-secondary">Unique step identifier</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">worker</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">Callable</td>
            <td className="py-3 border-b border-border text-text-secondary">Async function to execute</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">depends_on</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">List[str]</td>
            <td className="py-3 border-b border-border text-text-secondary">Steps that must complete before this one runs</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">input</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">Dict</td>
            <td className="py-3 border-b border-border text-text-secondary">Static input data for the step</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">timeout_seconds</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">float</td>
            <td className="py-3 border-b border-border text-text-secondary">Maximum execution time before timeout</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">retry_config</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">RetryConfig</td>
            <td className="py-3 border-b border-border text-text-secondary">Retry policy with max retries, backoff factor, and max backoff</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">interrupt_policy</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">InterruptPolicy</td>
            <td className="py-3 border-b border-border text-text-secondary">When to pause for human approval</td>
          </tr>
        </tbody>
      </table>
      <p className="text-text-secondary leading-relaxed mb-4">
        Dependency outputs are automatically injected into downstream steps. If
        step <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">extract</code> produces
        a result, the <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">verify</code> step
        receives it as <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">extract_result</code> in its input dict.
      </p>

      {/* Parallel execution */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Parallel execution
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The DAGExecutor groups steps into parallel batches using topological
        ordering. Within each batch, all steps run concurrently
        via <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">asyncio.gather()</code>.
        Between batches, the executor checkpoints results before starting the next group.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# Execution order for the invoice pipeline:
#
# Group 1: [extract]          — runs alone (no dependencies)
# Group 2: [verify, summarize] — runs in parallel (both depend on extract)
# Group 3: [notify]           — runs alone (depends on verify + summarize)
#
# Total time ≈ extract + max(verify, summarize) + notify`}</code>
      </pre>

      {/* Checkpointing */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Checkpointing and resumption
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        After each parallel group completes, the executor saves a checkpoint with
        all step results. If a workflow fails partway through, it can be resumed
        from the last checkpoint:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# Resume a failed workflow from the "verify" step
results = await executor.execute(
    workflow,
    execution_id="invoice_pipeline:1711152000",
    resume_from="verify",
)`}</code>
      </pre>

      {/* Retry logic */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Retry logic
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Each step can configure retry behavior with exponential backoff. The
        executor retries on transient errors and timeouts, up to the configured
        maximum:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`Step(
    name="verify",
    worker=verify_fn,
    depends_on=["extract"],
    timeout_seconds=45,
    retry_config=RetryConfig(
        max_retries=3,
        backoff_factor=2.0,   # 2s, 4s, 8s
        backoff_max=30.0,
        retry_on=["transient_error", "timeout"],
    ),
)`}</code>
      </pre>

      {/* HITL */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Human-in-the-loop interrupts
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Steps can be configured to pause execution and request human input before
        proceeding. The interrupt is surfaced to the frontend as
        an <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">interrupt</code> event.
        Three interrupt types are supported:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Type</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">action_required</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Approval</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">approve</td>
            <td className="py-3 border-b border-border text-text-secondary">User must approve before a step executes (e.g., issuing a refund)</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Selection</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">select</td>
            <td className="py-3 border-b border-border text-text-secondary">User must choose from a set of options</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Input</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">input</td>
            <td className="py-3 border-b border-border text-text-secondary">User must provide free-form text input</td>
          </tr>
        </tbody>
      </table>
      <p className="text-text-secondary leading-relaxed mb-4">
        If the human rejects the step, it is marked as <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">interrupted</code> and
        skipped. Downstream steps that depend on it will not run.
      </p>

      {/* Step results */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Step results and status
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Each step returns a <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">StepResult</code> with
        the execution status, output, duration, and retry count:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Status</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">success</td>
            <td className="py-3 border-b border-border text-text-secondary">Step completed successfully</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">failed</td>
            <td className="py-3 border-b border-border text-text-secondary">Step failed after exhausting all retries</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">interrupted</td>
            <td className="py-3 border-b border-border text-text-secondary">Step was rejected by human-in-the-loop</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">skipped</td>
            <td className="py-3 border-b border-border text-text-secondary">Step was skipped due to an upstream failure or interruption</td>
          </tr>
        </tbody>
      </table>
      <p className="text-text-secondary leading-relaxed mb-4">
        The overall workflow status is computed
        from step results: <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">success</code> if
        all steps succeeded, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">failed</code> if
        any step failed, or <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">partial_success</code> if
        some steps were interrupted.
      </p>
    </div>
  );
}
