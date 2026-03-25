import { type Highlighter, createHighlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark-dimmed"],
      langs: ["python", "yaml", "bash", "typescript", "json"],
    });
  }
  return highlighterPromise;
}

export async function highlight(
  code: string,
  lang: string
): Promise<string> {
  const highlighter = await getHighlighter();
  const validLangs = highlighter.getLoadedLanguages();
  const language = validLangs.includes(lang as never) ? lang : "text";
  return highlighter.codeToHtml(code, {
    lang: language,
    theme: "github-dark-dimmed",
  });
}
