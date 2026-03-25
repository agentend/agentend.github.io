export default function CLIPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">CLI Reference</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend</code> CLI
        is built with Typer and provides commands for scaffolding projects, running
        the server, inspecting fleet configuration, and checking memory status.
      </p>

      {/* agentend init */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend init</code>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Scaffold a new Agentend project. Creates a project directory with all the
        files you need to start building.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend init <name> [--python-version 3.11]`}</code>
      </pre>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Argument / Option</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Default</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">name</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">my-agent</td>
            <td className="py-3 border-b border-border text-text-secondary">Project name (used as directory name)</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">--python-version</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">3.11</td>
            <td className="py-3 border-b border-border text-text-secondary">Python version for the Dockerfile base image</td>
          </tr>
        </tbody>
      </table>
      <p className="text-text-secondary leading-relaxed mb-4">
        Generated files:
      </p>
      <ul className="space-y-2 text-text-secondary ml-4 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">app.py</code> — Application entry point with uvicorn</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code> — Fleet, memory, and infrastructure configuration</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">requirements.txt</code> — Python dependencies</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">Dockerfile</code> — Container definition</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">.env.example</code> — Environment variable template (DATABASE_URL, REDIS_URL, JWT_SECRET, etc.)</span>
        </li>
      </ul>

      {/* agentend serve */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend serve</code>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Start the Agentend server. Loads configuration from the project directory
        and runs a FastAPI application with uvicorn.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend serve [--host 0.0.0.0] [--port 8000] [--reload] [--workers 1]`}</code>
      </pre>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Option</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Default</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">--host</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">0.0.0.0</td>
            <td className="py-3 border-b border-border text-text-secondary">Host address to bind to</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">--port</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">8000</td>
            <td className="py-3 border-b border-border text-text-secondary">Port number to listen on</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">--reload</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">false</td>
            <td className="py-3 border-b border-border text-text-secondary">Enable auto-reload on file changes (development)</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">--workers</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">1</td>
            <td className="py-3 border-b border-border text-text-secondary">Number of uvicorn worker processes</td>
          </tr>
        </tbody>
      </table>

      {/* agentend fleet */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend fleet</code>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Display the current fleet configuration. Reads <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code> from
        the current directory and prints a summary of agents, workers, and their settings.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend fleet`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        Example output:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`Fleet Configuration:
  Name: default
  Version: 1
  Description: Default agentend fleet configuration

Agents (1):
  - main-agent
    * semantic_search
    * document_ingestion
    * memory_management

Workers (1):
  - executor (2 instances)
    Memory: 512MB
    Timeout: 300s`}</code>
      </pre>

      {/* agentend memory */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend memory</code>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Show memory status and statistics. Connects to the configured Redis instance
        and reports usage, cache entries, active sessions, and budget tracking keys.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend memory`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        Example output:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`Memory Status:
  Used: 2.45M
  Peak: 3.10M
  RSS: 4.20M

Cache Stats:
  Total Keys: 142
  Cache Entries: 85
  Active Sessions: 12
  Budget Tracking Keys: 45`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        Requires a running Redis instance. The Redis URL is read from
        the <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">REDIS_URL</code> environment
        variable (default: <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">redis://localhost:6379</code>).
      </p>

      {/* agentend version */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend version</code>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Print the installed Agentend version.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend version
# agentend 0.1.0-alpha`}</code>
      </pre>
    </div>
  );
}
