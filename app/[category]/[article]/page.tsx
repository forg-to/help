import { HELP_CONTENT } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TableOfContents } from "@/components/toc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import { generateId } from "@/lib/utils";

const BASE_URL = "https://help.forg.to";

export async function generateMetadata({
  params,
}: {
  params: { category: string; article: string };
}): Promise<Metadata> {
  const category = HELP_CONTENT.find((c) => c.slug === params.category);
  const article = category?.articles.find((a) => a.slug === params.article);

  if (!category || !article) {
    return { title: "Not Found" };
  }

  const url = `${BASE_URL}/${params.category}/${params.article}`;
  const plainText = article.content.replace(/[#*[\]!`]/g, "").replace(/\([^)]+\)/g, "").trim();
  const description = article.subtitle || plainText.slice(0, 155).trim() + "…";

  return {
    title: article.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description,
      siteName: "forg Help Center",
      publishedTime: article.lastUpdated ? new Date(article.lastUpdated).toISOString() : undefined,
      modifiedTime: article.lastUpdated ? new Date(article.lastUpdated).toISOString() : undefined,
      images: [{ url: "/forg-og-banner.png", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: ["/forg-og-banner.png"],
    },
  };
}

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
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkUnwrapImages]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 border-b border-[#e8e6dc] pb-2 text-[#141413] font-bricolage tracking-tight" id={generateId(props.children?.toString() || "")} {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-8 mb-4 border-b border-[#e8e6dc] pb-2 text-[#141413] font-bricolage tracking-tight" id={generateId(props.children?.toString() || "")} {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-6 mb-3 text-[#141413] font-bricolage tracking-tight" id={generateId(props.children?.toString() || "")} {...props} />,
          h4: ({ node, ...props }) => <h4 className="text-base font-bold mt-4 mb-2 text-[#141413] font-bricolage tracking-tight" id={generateId(props.children?.toString() || "")} {...props} />,
          p: ({ node, ...props }) => {
            const childrenContent = props.children?.toString() || "";
            if (childrenContent.startsWith("Image:") || childrenContent.startsWith("**Image:")) {
              const desc = childrenContent.replace(/^\*?\*?Image:\s*/, "").replace(/\*?\*?$/, "").trim();
              return (
                <div className="my-8 rounded-xl border-2 border-dashed border-[#e8e6dc] bg-[#faf9f5] p-10 flex flex-col items-center gap-4 text-center">
                  <div className="w-14 h-14 bg-[#f0eee6] rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#87867f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
                      <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
                      <polyline points="21 15 16 10 5 21" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-[#87867f] italic font-medium max-w-sm">{desc}</p>
                </div>
              );
            }
            return <p className="mb-4 leading-relaxed text-[#5e5d59]" {...props} />;
          },
          a: ({ node, ...props }) => {
            const href = props.href || "";
            if (href.startsWith("http")) {
              return <a target="_blank" rel="noopener noreferrer" className="text-[#c96442] hover:underline font-medium" {...props} />;
            }
            return <Link href={href} className="text-[#c96442] hover:underline font-medium" {...props} />;
          },
          img: ({ node, ...props }) => (
            <div className="my-8"><ImageLightbox src={props.src || ""} alt={props.alt || ""} /></div>
          ),
          ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 text-[#5e5d59] space-y-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 text-[#5e5d59] space-y-2" {...props} />,
          li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto mb-8 w-full">
              <table className="w-full border-collapse text-[#5e5d59]" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => <th className="border border-[#e8e6dc] px-4 py-3 text-left font-medium bg-[#f0eee6] rounded-t-lg text-[#141413]" {...props} />,
          td: ({ node, ...props }) => <td className="border border-[#e8e6dc] px-4 py-3" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-[#141413]" {...props} />,
          code: ({ node, inline, ...props }: any) => 
            inline ? <code className="bg-[#f0eee6] text-[#141413] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#e8e6dc]" {...props} /> 
                   : <pre className="bg-[#141413] text-[#faf9f5] p-5 rounded-xl overflow-x-auto mb-6 text-[13px] font-mono shadow-sm"><code {...props} /></pre>,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-[#c96442] pl-4 italic text-[#87867f] my-6" {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  const allArticles = HELP_CONTENT.flatMap(cat =>
    cat.articles.map(art => ({ ...art, categorySlug: cat.slug }))
  );
  const currentIndex = allArticles.findIndex(a => a.slug === params.article && a.categorySlug === params.category);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const articleUrl = `${BASE_URL}/${params.category}/${params.article}`;
  const plainText = article.content.replace(/[#*[\]!`]/g, "").replace(/\([^)]+\)/g, "").trim();
  const description = article.subtitle || plainText.slice(0, 155).trim() + "…";
  const publishedTime = article.lastUpdated ? new Date(article.lastUpdated).toISOString() : new Date().toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description,
    url: articleUrl,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Organization",
      name: "Forg",
      url: "https://forg.to",
    },
    publisher: {
      "@type": "Organization",
      name: "Forg",
      url: "https://forg.to",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: "forg Help Center",
      url: BASE_URL,
    },
    mentions: [
      { "@type": "Thing", name: "Indie Hackers" },
      { "@type": "Thing", name: "Build in Public" },
      { "@type": "Thing", name: "SaaS" },
      { "@type": "Organization", name: "Forg", url: "https://forg.to" }
    ],
    keywords: "build in public, indie hacker, product updates, milestone tracking, social cross-posting"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Forg Help",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `${BASE_URL}/${category.slug}/${category.articles[0].slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

        <h1 className="text-4xl font-bold mb-4 text-[#141413] tracking-tight font-bricolage">{article.title}</h1>
        {article.subtitle && (
          <p className="text-xl text-gray-500 mb-6 leading-relaxed">
            {article.subtitle}
          </p>
        )}
        <p className="text-xs text-gray-400 mb-10">Last updated: {article.lastUpdated || "Oct 1, 2024"}</p>

        <div className="article-content">
          {renderContent(article.content)}
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link 
              href={`/${prevArticle.categorySlug}/${prevArticle.slug}`}
              className="flex flex-col items-start p-6 rounded-xl border border-gray-100 hover:border-[#c96442] group transition-all"
            >
              <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                <ChevronLeft size={14} /> Previous
              </span>
              <span className="text-sm font-semibold text-[#141413] group-hover:text-[#c96442] transition-colors">
                {prevArticle.title}
              </span>
            </Link>
          ) : <div />}

          {nextArticle && (
            <Link 
              href={`/${nextArticle.categorySlug}/${nextArticle.slug}`}
              className="flex flex-col items-end text-right p-6 rounded-xl border border-gray-100 hover:border-[#c96442] group transition-all"
            >
              <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Next <ChevronRight size={14} />
              </span>
              <span className="text-sm font-semibold text-[#141413] group-hover:text-[#c96442] transition-colors">
                {nextArticle.title}
              </span>
            </Link>
          )}
        </div>
      </div>

        <aside className="hidden xl:block h-fit w-full max-w-[240px] sticky top-28">
          <TableOfContents content={article.content} />
        </aside>
      </div>
    </div>
    </>
  );
}
