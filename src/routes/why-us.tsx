import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, FeatureCard, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { FaqSection } from "@/components/FaqSection";
import { GENERAL_FAQS } from "@/lib/faqs";
import { IMG } from "@/lib/images";

const pageTitle = "Why Learn With Smile | Small Batches, Live Teachers";
const pageDesc = "Why 500+ Indian learners choose us — live small-batch classes, gamified learning, and a real teacher every session.";
const SITE = "https://learnwithsmile.in";

export const Route = createFileRoute("/why-us")({
  component: Page,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDesc },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDesc },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6dffc062-9fa7-42e7-827b-cfa1ce5dfbf9" },
      { property: "og:url", content: `${SITE}/why-us` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDesc },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6dffc062-9fa7-42e7-827b-cfa1ce5dfbf9" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/why-us` }],
  }),
});

function Page() {
  return (
    <Layout waMessage="Hi, I'd like to know why Learn With Smile fits me. Free demo please." footerImage={IMG.liveClass}>
      <section className="relative">
        <div className="absolute inset-0 z-0"><img src={IMG.liveClass} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-coral/40"/></div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white"><Icon name="shield" size={14}/> Why Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">Built for <span className="text-sunshine">Indian Learners</span>. Run by Real Teachers.</h1>
          <p className="mt-5 text-lg text-white">No bots. No pre-recorded videos. No mega-batches where you're invisible. Just live, small-batch teaching with a teacher who knows your name.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WaButton message="Hi, I read the Why Us page. Please give me a callback." variant="sun" size="lg">Get a Callback</WaButton>
            <WaButton message="Hi, I'd like to know why Learn With Smile fits me. Free demo please." variant="wa" size="lg">Book Free Demo</WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard icon="users" color="brand" title="Max 6 Per Batch">Every learner gets real speaking and feedback time. No back-bench.</FeatureCard>
          <FeatureCard icon="play" color="coral" title="100% Live, Always">Real teacher, real time, real Q&A. No passive video courses.</FeatureCard>
          <FeatureCard icon="gamepad" color="sunshine" title="Gamified Every Class">Flashcards, polls, quizzes, debates — learning that's actually fun.</FeatureCard>
          <FeatureCard icon="target" color="indigo" title="Outcome-First">Every course ends with portfolio, mock interview or certification.</FeatureCard>
          <FeatureCard icon="clock" color="sage" title="Flexible Timings">Morning, evening, weekend batches — built around working Indians.</FeatureCard>
          <FeatureCard icon="rupee" color="brand" title="Budget-Friendly">Genuinely affordable. No surprise add-ons. Easy monthly plans.</FeatureCard>
          <FeatureCard icon="shield" color="coral" title="Demo Before You Pay">Attend a full free live class before deciding.</FeatureCard>
          <FeatureCard icon="user" color="indigo" title="1:1 Available">Private sessions for anyone who needs personal pace.</FeatureCard>
          <FeatureCard icon="globe" color="sunshine" title="Pan-India, In English, Hindi & Bengali">Bilingual teaching available — comfort first.</FeatureCard>
        </div>
      </section>

      <section className="section bg-brand-deep">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <img src={IMG.womanLaptop} alt="" className="rounded-3xl shadow-2xl object-cover h-[360px] w-full"/>
          <div className="text-cream">
            <h2 className="text-cream text-3xl md:text-4xl">The First Class Is Free. Always.</h2>
            <p className="mt-3 text-white/95">Walk into a real live class — same teacher, same batch, same energy. If it's not for you, you don't pay a rupee.</p>
            <div className="mt-5"><WaButton message="Hi, I want a free demo to see Learn With Smile in action." variant="sun" size="lg">Book My Free Demo</WaButton></div>
          </div>
        </div>
      </section>

      <FaqSection items={GENERAL_FAQS} footerImage={IMG.liveClass} />
    </Layout>
  );
}
