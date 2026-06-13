import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
      <ol className="flex min-w-max items-center gap-2 text-sm text-[#6B7280]">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.path && !last ? (
                <Link className="hover:text-[#111827]" to={item.path}>
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "font-semibold text-[#111827]" : ""}>{item.label}</span>
              )}
              {!last ? <ChevronRight aria-hidden="true" className="h-4 w-4" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
