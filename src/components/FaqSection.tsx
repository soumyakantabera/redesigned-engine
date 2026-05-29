import { SectionHeader } from "./ui-bits";
import { Icon } from "./Icon";

export type FaqItem = { q: string; a: string };

export function FaqSection({
  items,
  footerImage,
}: {
  items: FaqItem[];
  footerImage?: string;
}) {
  return (
    <section className="section bg-cream">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <div>
          <SectionHeader
            align="left"
            eyebrow="FAQs"
            title="Quick Answers"
            subtitle="Anything else? Ask us on WhatsApp — we reply in minutes."
          />
          {footerImage && (
            <img
              src={footerImage}
              alt=""
              loading="lazy"
              className="rounded-2xl shadow-md object-cover h-60 w-full"
            />
          )}
        </div>
        <div className="space-y-3">
          {items.map((f, i) => (
            <details key={`${f.q}-${i}`} className="card-soft group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                <span className="font-display font-bold text-ink">{f.q}</span>
                <Icon
                  name="arrow-right"
                  size={16}
                  className="text-brand rotate-90 group-open:rotate-[-90deg] transition"
                />
              </summary>
              <p className="mt-3 text-ink/90 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
