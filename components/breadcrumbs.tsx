import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <ChevronRight size={14} />}
          <Link
            href={item.href}
            className={index === items.length - 1 ? "text-accent font-medium" : "hover:text-gray-600"}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
