export default function EventsPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Events</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend streams agent execution via the AG-UI protocol — a set of 13
        typed events delivered over Server-Sent Events (SSE). These events are
        compatible with the CopilotKit AG-UI spec, making it straightforward to
        connect any AG-UI frontend to an Agentend backend.
      </p>

      {/* Event types */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        13 Event Types
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Every event extends a base <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">AgentEvent</code> class
        with a <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">type</code>, <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">timestamp</code>,
        and optional <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">run_id</code>.
      </p>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Event Type</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Class</th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">run_started</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">RunStarted</td>
            <td className="py-3 border-b border-border text-text-secondary">Emitted when a run begins. Includes user_id, session_id, and input text.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">text_message_start</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">TextMessageStart</td>
            <td className="py-3 border-b border-border text-text-secondary">Agent begins generating text output.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">text_message_content</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">TextMessageContent</td>
            <td className="py-3 border-b border-border text-text-secondary">Streamed text content. Supports delta mode for token-by-token streaming.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">text_message_end</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">TextMessageEnd</td>
            <td className="py-3 border-b border-border text-text-secondary">Agent finishes text generation. Includes stop_reason.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">tool_call_start</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">ToolCallStart</td>
            <td className="py-3 border-b border-border text-text-secondary">Agent begins calling a tool. Includes tool_name and tool_use_id.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">tool_call_args</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">ToolCallArgs</td>
            <td className="py-3 border-b border-border text-text-secondary">Tool arguments being streamed. Supports delta mode.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">tool_call_end</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">ToolCallEnd</td>
            <td className="py-3 border-b border-border text-text-secondary">Tool call completes with result. Includes is_error flag.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">state_snapshot</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">StateSnapshot</td>
            <td className="py-3 border-b border-border text-text-secondary">Full state snapshot including agent state and memory context.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">state_delta</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">StateDelta</td>
            <td className="py-3 border-b border-border text-text-secondary">Incremental state change. Includes JSON path, value, and operation (set, delete, append).</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">thinking_step</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">ThinkingStep</td>
            <td className="py-3 border-b border-border text-text-secondary">Internal reasoning. Types: planning, reasoning, reflection.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">interrupt</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">Interrupt</td>
            <td className="py-3 border-b border-border text-text-secondary">Agent pauses for human input. Actions: approve, select, input.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">run_finished</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">RunFinished</td>
            <td className="py-3 border-b border-border text-text-secondary">Run completes successfully. Includes result, messages_sent, tools_used.</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">run_error</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">RunError</td>
            <td className="py-3 border-b border-border text-text-secondary">Run encounters an error. Includes error_type, message, and recoverable flag.</td>
          </tr>
        </tbody>
      </table>

      {/* Event structure */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Event structure
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Every event is a Python dataclass that serializes to JSON. The base event
        contains the type, a UTC timestamp, and an optional run ID:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# Python
@dataclass
class AgentEvent:
    type: EventType
    timestamp: str  # ISO 8601 UTC
    run_id: Optional[str] = None

    def to_json(self) -> str: ...
    def to_dict(self) -> Dict[str, Any]: ...`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        On the wire, each SSE message looks like:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`data: {"type": "text_message_content", "content": "Hello", "delta": true, "timestamp": "2026-03-23T12:00:00.000Z", "run_id": "run_abc123"}

data: {"type": "tool_call_start", "tool_name": "get_vendor_info", "tool_use_id": "tu_456", "timestamp": "2026-03-23T12:00:01.000Z", "run_id": "run_abc123"}`}</code>
      </pre>

      {/* SSE streaming */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        SSE streaming
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Events are delivered via Server-Sent Events on
        the <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">{`GET /stream/{session_id}`}</code> endpoint.
        The connection stays open for the duration of the agent run. The client
        receives events in real time as the agent processes — text tokens stream
        as they are generated, tool calls appear as they are invoked.
      </p>

      {/* Consuming events */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Consuming events
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Connect to the SSE stream from any language. Here is a TypeScript example
        using the standard EventSource API:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`// TypeScript
const eventSource = new EventSource(
  \`http://localhost:8000/stream/\${sessionId}\`
);

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case "text_message_content":
      // Append streaming text
      appendText(data.content);
      break;

    case "tool_call_start":
      // Show tool invocation
      showToolCall(data.tool_name);
      break;

    case "state_snapshot":
      // Update UI state
      updateState(data.state);
      break;

    case "interrupt":
      // Show approval dialog
      showApprovalDialog(data.reason, data.options);
      break;

    case "run_finished":
      eventSource.close();
      break;

    case "run_error":
      showError(data.message);
      eventSource.close();
      break;
  }
};`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        And a Python example for server-side consumption:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`# Python
import httpx

async with httpx.AsyncClient() as client:
    async with client.stream(
        "GET", f"http://localhost:8000/stream/{session_id}"
    ) as response:
        async for line in response.aiter_lines():
            if line.startswith("data: "):
                event = json.loads(line[6:])
                print(f"[{event['type']}] {event}")`}</code>
      </pre>
    </div>
  );
}
