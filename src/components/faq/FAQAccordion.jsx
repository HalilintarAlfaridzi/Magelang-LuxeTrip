import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const open = openId === faq.id;

        return (
          <div key={faq.id} className="rounded-lg border border-[#E5E7EB] bg-white">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left"
              onClick={() => setOpenId(open ? null : faq.id)}
              aria-expanded={open}
            >
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#8B6F47]">
                  {faq.category}
                </span>
                <span className="mt-1 block font-bold text-[#111827]">{faq.question}</span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className={["h-5 w-5 shrink-0 text-[#8B6F47] transition", open ? "rotate-180" : ""].join(" ")}
              />
            </button>
            {open ? <p className="px-5 pb-5 leading-7 text-[#5f6673]">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
