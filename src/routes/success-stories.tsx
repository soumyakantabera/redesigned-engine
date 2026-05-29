import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FaqSection } from "@/components/FaqSection";
import { GENERAL_FAQS } from "@/lib/faqs";
import { IMG } from "@/lib/images";

const pageTitle = "Student Success Stories | Learn With Smile";
const pageDesc = "Real Indian learners, real outcomes — career switches, IELTS bands, BI Analyst jobs, salary jumps. Read 9 verified stories.";
const SITE = "https://learnwithsmile.in";

export const Route = createFileRoute("/success-stories")({
  component: Page,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDesc },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDesc },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6dffc062-9fa7-42e7-827b-cfa1ce5dfbf9" },
      { property: "og:url", content: `${SITE}/success-stories` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDesc },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6dffc062-9fa7-42e7-827b-cfa1ce5dfbf9" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/success-stories` }],
  }),
});

const STORIES = [
  { quote: "Joined with zero English confidence. Six months later I was leading client presentations. The gamified exercises and live debates made it genuinely enjoyable — not just effective.", name: "Priya Sharma", detail: "Spoken English · Marketing Executive, Kolkata", waMessage: "Hi, I saw Priya's story. Free demo for Spoken English please." },
  { quote: "Cleared PL-300 on first attempt. Showed my three live-built dashboards in the interview and got the BI Analyst role the same week.", name: "Rohan Mehta", detail: "Power BI · BI Analyst, Bangalore", waMessage: "Hi, I saw Rohan's Power BI story. Free demo please." },
  { quote: "Switched from a BPO to a data analyst role. Salary doubled in 4 months. Gamified Python exercises made coding enjoyable.", name: "Siddharth Nair", detail: "Master Python · Data Analyst, Pune", waMessage: "Hi, I saw Siddharth's story. Free demo for Python please." },
  { quote: "Went from IELTS 5.5 to 7.5 overall. The writing feedback was a game changer.", name: "Harshit Singh", detail: "IELTS · Now in Toronto", waMessage: "Hi, I saw Harshit's IELTS story. Free demo please." },
  { quote: "I couldn't speak two lines without freezing. Now I take Monday team standups.", name: "Anjali Roy", detail: "Spoken English · Teacher, Howrah", waMessage: "Hi, I saw Anjali's story. Spoken English demo please." },
  { quote: "Excel went from 'just SUM' to building the FP&A dashboard at work. Got promoted in 5 months.", name: "Vikram Iyer", detail: "Master Excel · Finance Analyst, Mumbai", waMessage: "Hi, I want Vikram's Excel result. Free demo please." },
  { quote: "Cleared interview rounds I used to fail. The mock interviews showed me exactly what to change.", name: "Sneha Das", detail: "Interview Prep · IT Engineer, Hyderabad", waMessage: "Hi, I saw Sneha's story. Interview Prep demo please." },
  { quote: "Built two Tableau dashboards in the course — uploaded them and got my first analyst interview within 3 weeks.", name: "Ritika Bose", detail: "Tableau · Analyst, Kolkata", waMessage: "Hi, I want Ritika's Tableau result. Free demo please." },
  { quote: "Career counselling helped me drop a wrong course and pick a B.Tech specialisation I actually love.", name: "Aarav Pandey", detail: "Career Counselling · Student, Delhi", waMessage: "Hi, I want Aarav's career clarity. Book me a session please." },
];

function Page() {
  return (
    <Layout waMessage="Hi, I read the success stories. I want the same result — free demo please." footerImage={IMG.graduation}>
      <section className="relative">
        <div className="absolute inset-0 z-0"><img src={IMG.graduation} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/75 to-sunshine/40"/></div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">★ Real Outcomes</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">Real Indian Learners. <span className="text-sunshine">Real Results.</span></h1>
          <p className="mt-5 text-lg text-white">Career switches, IELTS scores, BI Analyst jobs, salary jumps. Every story below is from a verified Learn With Smile learner.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WaButton message="Hi, I read the success stories. Please give me a callback." variant="sun" size="lg">Get a Callback</WaButton>
            <WaButton message="Hi, I read the success stories. I want the same result — free demo please." variant="wa" size="lg">Book Free Demo</WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrowTone="coral" eyebrow="Verified Stories" title="Career Switches, Promotions & IELTS Bands — Their Stories" subtitle="Real learners, real outcomes. Every story below is from a verified Learn With Smile learner who started exactly where you are now."/>
          <TestimonialSlider items={STORIES}/>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl">Want to be the next story?</h2>
          <p className="mt-3 text-ink/85 max-w-xl mx-auto">Tell us your goal — we'll match you to the right course and a free demo slot, same day.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message="Hi, I want to be the next success story. Free demo please." variant="primary" size="lg">🎓 Book Free Demo</WaButton>
            <WaButton message="Hi, please recommend a course based on my goal." variant="wa" size="lg">Get a Recommendation</WaButton>
          </div>
        </div>
      </section>

      <FaqSection items={GENERAL_FAQS} footerImage={IMG.graduation} />
    </Layout>
  );
}
