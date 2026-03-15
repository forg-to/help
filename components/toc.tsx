"use client";

export function TableOfContents({ content }: { content: string }) {
  // Extract blocks that would be rendered as H3 in our custom renderer
  const blocks = content.split('\n\n');
  const headings = blocks
    .map(block => block.split('\n')[0])
    .filter(line => (line.endsWith(':') && line.length < 60) || line.startsWith('Step') || line.startsWith('How to'))
    .map(h => h.replace(':', '').trim());

  if (headings.length === 0) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">On this page</h4>
      <nav className="space-y-3">
        {headings.map((heading, i) => (
          <a
            key={i}
            href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
            className="block text-sm text-[#6b7280] hover:text-accent transition-colors leading-relaxed"
          >
            {heading}
          </a>
        ))}
      </nav>
    </div>
  );
}
