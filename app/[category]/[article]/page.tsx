import { HELP_CONTENT } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TableOfContents } from "@/components/toc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { ReactNode } from "react";
import { ImageLightbox } from "@/components/image-lightbox";

export async function generateStaticParams() {
  const params = HELP_CONTENT.flatMap((category) =>
    category.articles.map((article) => ({
      category: category.slug,
      article: article.slug,
    }))
  );
  return params;
}

function parseInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|`([^`]+)`/g;
  let lastIndex = 0;
  let key = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      // Markdown link [text](url)
      parts.push(
        <Link
          key={key++}
          href={match[2]}
          className="text-accent hover:underline font-medium"
        >
          {match[1]}
        </Link>
      );
    } else if (match[3] !== undefined) {
      // Bold **text**
      parts.push(
        <strong key={key++} className="font-semibold text-[#0a0a0a]">
          {match[3]}
        </strong>
      );
    } else if (match[4] !== undefined) {
      // Inline code `text`
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-800">
          {match[4]}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 0) return text;
  if (parts.length === 1 && typeof parts[0] === "string") return parts[0];
  return <>{parts}</>;
}

function renderBodyLines(lines: string[], baseKey: string): ReactNode {
  const output: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      output.push(
        <ul key={`${baseKey}-ul-${i}`} className="list-disc pl-5 mb-4 space-y-1.5">
          {listItems.map((item, j) => (
            <li key={j} className="text-sm leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^\d+\.\s/)) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      output.push(
        <ol key={`${baseKey}-ol-${i}`} className="list-decimal pl-5 mb-4 space-y-1.5">
          {listItems.map((item, j) => (
            <li key={j} className="text-sm leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    output.push(
      <p key={`${baseKey}-p-${i}`} className="text-sm leading-relaxed mb-2">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return <>{output}</>;
}

export default function ArticlePage({ params }: { params: { category: string; article: string } }) {
  const category = HELP_CONTENT.find((c) => c.slug === params.category);
  const article = category?.articles.find((a) => a.slug === params.article);

  if (!category || !article) {
    notFound();
  }

  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");
    return blocks.map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Actual markdown image — block is ![alt text](/path/to/image.png)
      const mdImageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (mdImageMatch) {
        const [, alt, src] = mdImageMatch;
        return <ImageLightbox key={i} src={src} alt={alt} />;
      }

      // Image placeholder — entire block is **Image: ...**
      if (trimmed.startsWith("**Image:") && trimmed.endsWith("**")) {
        const desc = trimmed.slice(2, -2).replace(/^Image:\s*/, "").trim();
        return (
          <div
            key={i}
            className="my-6 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 flex flex-col items-center gap-3 text-center"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
                <polyline points="21 15 16 10 5 21" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 italic font-medium">{desc}</p>
          </div>
        );
      }

      // Table
      if (trimmed.includes("|") && trimmed.includes("---")) {
        const rows = trimmed.split("\n");
        const headers = rows[0].split("|").map((h) => h.trim()).filter(Boolean);
        const dataRows = rows.slice(2).map((row) => row.split("|").map((c) => c.trim()).filter(Boolean));
        return (
          <div key={i} className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {headers.map((h, j) => (
                    <th key={j} className="p-3 text-left font-semibold text-sm text-[#0a0a0a]">
                      {parseInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, j) => (
                  <tr key={j} className="border-b border-gray-100 last:border-0">
                    {row.map((cell, k) => (
                      <td key={k} className="p-3 text-sm leading-relaxed">
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      const lines = trimmed.split("\n");

      // Pure list block
      if (lines[0].startsWith("- ") || lines[0].startsWith("* ")) {
        return (
          <ul key={i} className="list-disc pl-5 mb-6 space-y-2">
            {lines.map((item, j) => (
              <li key={j} className="text-sm leading-relaxed">
                {parseInline(item.replace(/^[-*]\s+/, ""))}
              </li>
            ))}
          </ul>
        );
      }

      // Pure ordered list block
      if (lines[0].match(/^\d+\.\s/)) {
        return (
          <ol key={i} className="list-decimal pl-5 mb-6 space-y-2">
            {lines.map((item, j) => (
              <li key={j} className="text-sm leading-relaxed">
                {parseInline(item.replace(/^\d+\.\s+/, ""))}
              </li>
            ))}
          </ol>
        );
      }

      // Section with multiple lines — first line is header, rest is body
      if (
        lines.length > 1 &&
        !lines[0].startsWith("**") &&
        !lines[0].startsWith("-") &&
        !lines[0].startsWith("*") &&
        !lines[0].match(/^\d+\./)
      ) {
        const headerId = lines[0].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        return (
          <div key={i} className="mb-8">
            <h3
              className="text-base font-semibold text-[#0a0a0a] mb-3"
              id={headerId}
            >
              {parseInline(lines[0])}
            </h3>
            <div>{renderBodyLines(lines.slice(1), `${i}`)}</div>
          </div>
        );
      }

      // Single paragraph
      return (
        <p key={i} className="mb-6 text-sm leading-relaxed">
          {parseInline(trimmed)}
        </p>
      );
    });
  };

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 py-12">
      <div className="flex flex-col items-center gap-12 xl:grid xl:grid-cols-[minmax(0,720px)_240px] xl:items-start xl:justify-center">
        <div className="w-full max-w-[720px]">
        <Breadcrumbs
          items={[
            { label: "Help", href: "/" },
            { label: category.title, href: `/${category.slug}/${category.articles[0].slug}` },
            { label: article.title, href: `/${category.slug}/${article.slug}` },
          ]}
        />

        <h1 className="text-4xl font-bold mb-4 text-[#0a0a0a]">{article.title}</h1>
        <p className="text-xs text-gray-400 mb-10">Last updated: Oct 1, 2024</p>

        <div className="article-content">
          {renderContent(article.content)}
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
          <p className="text-sm font-semibold text-[#0a0a0a] mb-6">Was this helpful?</p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-full hover:border-accent hover:text-accent transition-all text-sm font-medium">
              <ThumbsUp size={16} /> Yes
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-full hover:border-accent hover:text-accent transition-all text-sm font-medium">
              <ThumbsDown size={16} /> No
            </button>
          </div>
        </div>
      </div>

        <aside className="hidden xl:block h-fit w-full max-w-[240px] sticky top-28">
          <TableOfContents content={article.content} />
        </aside>
      </div>
    </div>
  );
}
