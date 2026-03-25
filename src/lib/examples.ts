export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Example {
  id: string;
  title: string;
  description: string;
  code: string;
  features: string[];
  difficulty: Difficulty;
}

export const examples: Example[] = [
  {
    id: "invoice-processor",
    title: "Invoice Processor",
    description:
      "Extract, verify, and summarize business invoices with three specialized workers.",
    code: `from agentend import Agentend, Capability, tool

app = Agentend()

@app.capability("invoices")
class InvoiceProcessor(Capability):
    workers = ["extract", "verify", "summarize"]

    def get_domain_context(self, ctx):
        return "Process business invoices: extract line items, verify totals, summarize."

    @tool
    def lookup_vendor(self, vendor_id: str) -> dict:
        """Look up vendor details from the database."""
        return {"vendor_id": vendor_id, "name": "Acme Corp", "terms": "Net 30"}

    @tool
    def flag_discrepancy(self, invoice_id: str, field: str, expected: str, actual: str) -> str:
        """Flag a discrepancy between expected and actual values."""
        return f"Flagged {field} on invoice {invoice_id}: expected {expected}, got {actual}"`,
    features: ["extract", "verify", "summarize", "@tool"],
    difficulty: "beginner",
  },
  {
    id: "support-classifier",
    title: "Support Ticket Classifier",
    description:
      "Automatically classify and respond to customer support tickets.",
    code: `from agentend import Agentend, Capability, tool

app = Agentend()

@app.capability("support_tickets")
class SupportClassifier(Capability):
    workers = ["classify", "generate"]

    def get_domain_context(self, ctx):
        return "Classify tickets by urgency and department, then draft a response."

    @tool
    def escalate(self, ticket_id: str, department: str) -> str:
        """Escalate a ticket to a specific department."""
        return f"Ticket {ticket_id} escalated to {department}"`,
    features: ["classify", "generate", "intent routing"],
    difficulty: "beginner",
  },
  {
    id: "legal-reviewer",
    title: "Legal Document Reviewer",
    description:
      "Review legal documents for compliance issues with multi-step verification.",
    code: `from agentend import Agentend, Capability, tool

app = Agentend()

@app.capability("legal_review")
class LegalReviewer(Capability):
    workers = ["extract", "verify", "generate"]

    def get_domain_context(self, ctx):
        return (
            "Review legal documents for compliance. Extract key clauses, "
            "verify against regulatory requirements, generate a compliance report."
        )

    @tool
    def check_regulation(self, regulation_id: str, clause_text: str) -> dict:
        """Check a clause against a specific regulation."""
        return {
            "regulation_id": regulation_id,
            "compliant": True,
            "notes": "Clause meets requirements under section 4.2",
        }

    @tool
    def flag_risk(self, section: str, risk_level: str, description: str) -> str:
        """Flag a compliance risk in the document."""
        return f"Risk flagged in {section}: [{risk_level}] {description}"`,
    features: ["extract", "verify", "generate", "domain context"],
    difficulty: "intermediate",
  },
  {
    id: "research-pipeline",
    title: "Multi-Step Research Pipeline",
    description:
      "Orchestrate a research workflow with parallel data gathering and human approval.",
    code: `from agentend import Agentend, Capability, tool
from agentend.orchestrator import workflow, step, parallel, human_approval

app = Agentend()

@app.capability("research")
class ResearchPipeline(Capability):
    workers = ["classify", "extract", "generate", "verify"]

    @workflow
    def run(self, query: str):
        # Step 1: Classify the research topic
        topic = yield step("classify", f"Classify research area: {query}")

        # Step 2: Parallel data gathering
        sources = yield parallel(
            step("extract", "Search academic papers", source="arxiv"),
            step("extract", "Search web sources", source="web"),
            step("extract", "Search internal knowledge base", source="kb"),
        )

        # Step 3: Human approval before synthesis
        yield human_approval(
            reason="Review gathered sources before synthesis",
            context={"topic": topic, "source_count": len(sources)},
        )

        # Step 4: Generate and verify the report
        report = yield step("generate", "Synthesize findings into a report")
        verified = yield step("verify", "Fact-check all claims in the report")

        return verified`,
    features: ["orchestrator", "parallel steps", "HITL"],
    difficulty: "advanced",
  },
  {
    id: "capability-builder",
    title: "Chat-to-Build",
    description:
      "Create new capabilities through natural language conversation with the builder agent.",
    code: `from agentend import Agentend, CapabilityBuilder

app = Agentend()
builder = CapabilityBuilder()

# Start a building session
session = builder.new_session()

# Describe what you want in natural language
await builder.process_message(
    session.session_id,
    "I need a capability that categorizes support tickets by urgency"
)

# Define intent patterns
await builder.process_message(
    session.session_id,
    "classify ticket, categorize request, triage issue"
)

# Configure workers
await builder.process_message(
    session.session_id,
    "Use classify and generate slots"
)

# Generate deployable code
code = builder.generate_code(session.session_id)

# Hot-deploy to running instance (no restart needed)
await builder.deploy(session.session_id, app)`,
    features: ["builder", "no-code"],
    difficulty: "beginner",
  },
  {
    id: "rag-knowledge",
    title: "RAG Knowledge Base",
    description:
      "Ingest documents, build semantic memory, and answer questions with citations.",
    code: `from agentend import Agentend, Capability, tool

app = Agentend()

@app.capability("knowledge_base")
class RAGKnowledgeBase(Capability):
    workers = ["extract", "generate"]

    def get_domain_context(self, ctx):
        return (
            "Answer questions using ingested documents. "
            "Always cite sources with page numbers."
        )

    @tool
    def ingest_document(self, url: str, doc_type: str = "pdf") -> dict:
        """Ingest a document into the semantic memory tier."""
        # Triggers: acquire -> transform -> classify -> chunk+embed
        return {"status": "ingested", "chunks": 47, "url": url}

    @tool
    def search_memory(self, query: str, top_k: int = 5) -> list:
        """Search semantic memory (pgvector) for relevant chunks."""
        return [
            {"text": "Relevant passage...", "source": "doc.pdf", "page": 12, "score": 0.94},
            {"text": "Another passage...", "source": "doc.pdf", "page": 34, "score": 0.89},
        ]`,
    features: ["ingest", "semantic memory", "generate"],
    difficulty: "intermediate",
  },
];
