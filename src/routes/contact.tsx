import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { FaqSection } from "@/components/FaqSection";
import { GENERAL_FAQS } from "@/lib/faqs";
import { IMG } from "@/lib/images";

const pageTitle = "Contact Learn With Smile | WhatsApp, Email & Kolkata Centre";
const pageDesc = "Get in touch with Learn With Smile — WhatsApp +91 96744 79949, email hello@learnwithsmile.in, or visit our Kolkata centre. Free demo classes available.";
const SITE = "https://learnwithsmile.in";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDesc },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDesc },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6dffc062-9fa7-42e7-827b-cfa1ce5dfbf9" },
      { property: "og:url", content: `${SITE}/contact` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDesc },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6dffc062-9fa7-42e7-827b-cfa1ce5dfbf9" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Learn With Smile",
          url: SITE,
          telephone: "+91 96744 79949",
          email: "hello@learnwithsmile.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "75/2/4, Raja Ram Mohan Roy Road",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700008",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "22.5726",
            longitude: "88.3639",
          },
          areaServed: "IN",
          priceRange: "Budget-friendly",
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <Layout
      waMessage="Hi, I visited the Contact page. Please give me a callback."
      footerImage={IMG.graduation}
    >
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.teacherWoman}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-indigo-pop/55" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="globe" size={14} /> Contact Us
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Let's Talk. <span className="text-sunshine">We're Here.</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            WhatsApp, email, or a quick call — however you prefer. We reply in
            minutes during working hours and confirm demo slots the same day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WaButton
              message="Hi, I visited your Contact page. Please give me a callback to discuss courses."
              variant="sun"
              size="lg"
            >
              Get a Callback
            </WaButton>
            <WaButton
              message="Hi, I am interested in a free demo. Please guide me."
              variant="wa"
              size="lg"
            >
              Chat on WhatsApp
            </WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-3 gap-6">
          <ContactCard
            icon="whatsapp"
            title="WhatsApp"
            detail="+91 96744 79949"
            cta="Message Now"
            wa="Hi, I want to get in touch about Learn With Smile courses."
          />
          <ContactCard
            icon="mail"
            title="Email"
            detail="hello@learnwithsmile.in"
            cta="Send Email"
            href="mailto:hello@learnwithsmile.in"
          />
          <ContactCard
            icon="target"
            title="Kolkata Centre"
            detail="75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008"
            cta="Get Directions"
            href="https://www.google.com/maps/dir/?api=1&destination=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008+India"
          />
        </div>
      </section>

      <FaqSection items={GENERAL_FAQS} footerImage={IMG.groupClass} />

      <section className="section bg-brand-deep">
        <div className="container-x text-center text-cream">
          <h2 className="text-cream text-3xl md:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-white max-w-xl mx-auto">
            Send us a WhatsApp message — we reply within minutes and can book
            your free demo instantly.
          </p>
          <div className="mt-6">
            <WaButton
              message="Hi, I have a few questions. Can you give me a callback?"
              variant="sun"
              size="lg"
            >
              Request a Callback
            </WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactCard({
  icon,
  title,
  detail,
  cta,
  wa,
  href,
}: {
  icon: any;
  title: string;
  detail: string;
  cta: string;
  wa?: string;
  href?: string;
}) {
  const link = wa
    ? `https://wa.me/919674479949?text=${encodeURIComponent(wa)}`
    : href;
  return (
    <div className="card-soft text-center">
      <div className="mx-auto h-14 w-14 rounded-2xl bg-brand-soft text-brand-deep flex items-center justify-center mb-4">
        <Icon name={icon} size={28} />
      </div>
      <h3 className="text-xl font-display font-bold text-ink mb-1">{title}</h3>
      <p className="text-ink/85 text-sm mb-4">{detail}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        {cta}
      </a>
    </div>
  );
}
