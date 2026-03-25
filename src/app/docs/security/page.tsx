export default function SecurityPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Security</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend takes a defense-in-depth approach to security. The PALADIN system
        provides 5 layers of injection defense, while the auth module handles
        identity verification and the guardrails module validates inputs and outputs.
      </p>

      {/* PALADIN */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        PALADIN — 5-layer injection defense
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        PALADIN (Proactive Agent-Layer Anti-injection Defense INfrastructure) is a
        multi-layer system that detects and neutralizes injection attacks before they
        reach the LLM. Layer 1 — the InputSanitizer — runs on every incoming request.
      </p>

      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        Layer 1: Input sanitization
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        The InputSanitizer strips control characters, removes known injection patterns,
        and validates input length. It detects and blocks:
      </p>
      <ul className="space-y-2 text-text-secondary ml-4 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Script injection</strong> — <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`<script>`}</code>, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`<iframe>`}</code>, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`<object>`}</code> tags</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Protocol abuse</strong> — <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">javascript:</code> and <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">data:text/html</code> URIs</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Event handler injection</strong> — inline <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`on*=`}</code> attributes</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Template injection</strong> — <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`\${...}`}</code> and <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`{{...}}`}</code> patterns</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Code execution</strong> — <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">exec()</code>, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">eval()</code>, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">__import__</code></span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">SQL injection</strong> — UNION, SELECT, INSERT, UPDATE, DELETE, DROP, CREATE, ALTER keywords</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Shell injection</strong> — command chaining (<code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">; rm</code>), pipe to shell, backtick substitution, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">$()</code> expansion</span>
        </li>
      </ul>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`from agentend.security.sanitizer import InputSanitizer

sanitizer = InputSanitizer(
    max_length=100000,
    allow_html=False,
    allow_sql=False,
    allow_shell=False,
)

# Sanitize user input
clean = sanitizer.sanitize(user_input)

# Check for injection patterns
patterns = sanitizer.has_injection_patterns(user_input)
if patterns:
    log.warning(f"Detected injection patterns: {patterns}")`}</code>
      </pre>

      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        Layer 2: Prompt armoring
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        System prompts are wrapped with injection-resistant delimiters and
        instructions that tell the LLM to ignore overrides embedded in user input.
      </p>

      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        Layer 3: Output validation
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agent responses are scanned for leaked system prompts, PII, and
        hallucinated tool calls before being sent to the client.
      </p>

      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        Layer 4: Tool call validation
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Tool calls are validated against a whitelist of allowed tools and argument
        schemas before execution. This prevents the LLM from invoking tools it
        should not have access to or passing malicious arguments.
      </p>

      <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
        Layer 5: Behavioral monitoring
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        Runtime monitoring detects anomalous patterns like repeated tool calls,
        unusual output lengths, or attempts to exfiltrate data through side channels.
      </p>

      {/* Auth */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Authentication
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend supports three authentication methods, configured
        in <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code>:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Method</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">JWT</td>
            <td className="py-3 border-b border-border text-text-secondary">JSON Web Tokens with configurable secret and algorithm (default: HS256)</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">OAuth2</td>
            <td className="py-3 border-b border-border text-text-secondary">External OAuth2 provider with client ID/secret</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">API Key</td>
            <td className="py-3 border-b border-border text-text-secondary">Header-based API key validation (default header: X-API-Key)</td>
          </tr>
        </tbody>
      </table>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# fleet.yaml
auth:
  enabled: true
  provider: jwt
  jwt:
    secret: \${JWT_SECRET}
    algorithm: HS256`}</code>
      </pre>

      {/* RBAC */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Per-capability RBAC
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Role-Based Access Control restricts which capabilities a user can invoke.
        Roles are extracted from the JWT claims and matched against capability
        requirements at dispatch time.
      </p>

      {/* Guardrails */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Guardrails
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The guardrails module provides configurable input and output validation:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Guardrail</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Direction</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">max_length</td>
            <td className="py-3 border-b border-border text-text-secondary">Input</td>
            <td className="py-3 border-b border-border text-text-secondary">Maximum input length (default: 10,000 chars)</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">sanitize_html</td>
            <td className="py-3 border-b border-border text-text-secondary">Input</td>
            <td className="py-3 border-b border-border text-text-secondary">Strip HTML tags from input</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">check_pii</td>
            <td className="py-3 border-b border-border text-text-secondary">Output</td>
            <td className="py-3 border-b border-border text-text-secondary">Detect personally identifiable information in responses</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">check_toxicity</td>
            <td className="py-3 border-b border-border text-text-secondary">Output</td>
            <td className="py-3 border-b border-border text-text-secondary">Check for toxic or harmful content</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">redact_sensitive</td>
            <td className="py-3 border-b border-border text-text-secondary">Output</td>
            <td className="py-3 border-b border-border text-text-secondary">Redact sensitive data (keys, passwords, etc.)</td>
          </tr>
        </tbody>
      </table>

      {/* Multi-tenant RLS */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Multi-tenant RLS
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend uses PostgreSQL Row-Level Security (RLS) to enforce data isolation
        between tenants. Every database query is automatically scoped to the
        authenticated tenant. This is enforced at the persistence layer via
        SQLAlchemy 2.0 async models, so there is no way to accidentally query
        another tenant&apos;s data.
      </p>
    </div>
  );
}
