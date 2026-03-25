import DocsSidebar from "@/components/layout/docs-sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex gap-0 md:gap-12">
      <DocsSidebar />
      <div className="flex-1 min-w-0">
        <div className="space-y-8 [&_h1]:text-3xl [&_h1]:font-display [&_h1]:italic [&_h1]:text-text-primary [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-text-primary [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-text-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-text-secondary [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-text-secondary [&_li]:mb-2 [&_li]:leading-relaxed [&_code]:font-mono [&_code]:text-accent [&_code]:text-sm [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-cyan [&_blockquote]:border-l-2 [&_blockquote]:border-accent/50 [&_blockquote]:pl-4 [&_blockquote]:text-text-muted [&_blockquote]:italic [&_hr]:border-border [&_hr]:my-8">
          {children}
        </div>
      </div>
    </div>
  );
}
