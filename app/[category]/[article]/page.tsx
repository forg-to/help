import { HELP_CONTENT } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TableOfContents } from "@/components/toc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export async function generateStaticParams() {
  const params = HELP_CONTENT.flatMap((category) =>
    category.articles.map((article) => ({
      category: category.slug,
      article: article.slug,
    }))
  );
  return params;
}

export default function ArticlePage({ params }: { params: { category: string; article: string } }) {
  const category = HELP_CONTENT.find((c) => c.slug === params.category);
  const article = category?.articles.find((a) => a.slug === params.article);

  if (!category || !article) {
    notFound();
  }

  const renderContent = (content: string) => {
    const blocks = content.split('\n\n');
    return blocks.map((block, i) => {
      // Table rendering (Markdown pipes)
      if (block.includes('|') && block.includes('---')) {
        const rows = block.trim().split('\n');
        const headers = rows[0].split('|').map(h => h.trim()).filter(Boolean);
        const dataRows = rows.slice(2).map(row => row.split('|').map(c => c.trim()).filter(Boolean));

        return (
          <div key={i} className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {headers.map((h, j) => (
                    <th key={j} className="p-3 text-left font-semibold text-sm text-[#0a0a0a]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, j) => (
                  <tr key={j} className="border-b border-gray-100 last:border-0">
                    {row.map((cell, k) => (
                      <td key={k} className="p-3 text-sm leading-relaxed">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // List rendering
      if (block.trim().startsWith('- ') || block.trim().startsWith('* ')) {
        const items = block.trim().split('\n');
        return (
          <ul key={i} className="list-disc pl-5 mb-6 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="text-sm leading-relaxed">{item.replace(/^[-*]\s+/, '')}</li>
            ))}
          </ul>
        );
      }

      // Ordered list rendering
      if (block.trim().match(/^\d+\.\s/)) {
        const items = block.trim().split('\n');
        return (
          <ol key={i} className="list-decimal pl-5 mb-6 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="text-sm leading-relaxed">{item.replace(/^\d+\.\s+/, '')}</li>
            ))}
          </ol>
        );
      }

      // H3-like section headers (lines that look like headers or end with :)
      const lines = block.split('\n');
      if (lines.length > 1 && (lines[0].endsWith(':') || (lines[0].length < 50 && lines[1].startsWith('-')))) {
         return (
           <div key={i} className="mb-6">
             <h3 className="text-xl font-bold text-[#0a0a0a] mb-3" id={lines[0].replace(':', '').toLowerCase().replace(/\s+/g, '-')}>
               {lines[0]}
             </h3>
             <div className="space-y-4">
               {lines.slice(1).map((line, j) => (
                 <p key={j} className="text-sm leading-relaxed">{line}</p>
               ))}
             </div>
           </div>
         );
      }

      // Default paragraph
      return (
        <p key={i} className="mb-6 text-sm leading-relaxed">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-screen-xl mx-auto px-6 py-12">
      <div className="flex-1 max-w-[720px] mx-auto lg:mx-0">
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

      <aside className="hidden xl:block w-64 h-fit sticky top-28">
        <TableOfContents content={article.content} />
      </aside>
    </div>
  );
}
