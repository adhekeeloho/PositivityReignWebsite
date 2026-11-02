import Image from "next/image";
import Link from "next/link";
import ContactCta from "@/components/contact-cta";

const values = [
  {
    title: "Compassion",
    copy: "We meet every person with care, respect, and an open mind.",
  },
  {
    title: "Growth",
    copy: "We make space for learning, new perspectives, and meaningful change.",
  },
  {
    title: "Community",
    copy: "Wellbeing can ripple outward—from individuals to families and workplaces.",
  },
];

export const metadata = {
  title: "About",
  description:
    "Get to know PositivityReign Consult and its people-first approach to mental health, wellbeing, and growth.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <main>
        <section className="relative overflow-hidden bg-[#f1f6ed]">
          <div className="soft-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
            <span className="eyebrow">About PositivityReign</span>
            <h1 className="display-heading mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
              Care that sees the whole person.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#587078]">
              PositivityReign Consult is a Lagos-based practice bringing
              together mental health support, consulting, training, and
              practical workplace wellbeing.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-14 lg:py-28">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-brand-green/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e0e9e2] bg-white p-4 shadow-[0_25px_70px_rgba(24,58,67,0.08)]">
              <Image
                alt="PositivityReign Consult logo"
                className="h-auto w-full rounded-[1.4rem]"
                height={768}
                src="/positivityreign-logo.jpg"
                width={768}
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-brand-blue px-5 py-4 text-white shadow-lg sm:right-0">
              <p className="font-serif text-xl">Lagos, Nigeria</p>
              <p className="mt-1 text-xs tracking-wide text-white/80">
                Transforming Lives, Elevating Societies
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pl-8">
            <span className="eyebrow">Our purpose</span>
            <h2 className="display-heading mt-5 text-4xl sm:text-5xl">
              Helping people and organizations move forward with care.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#587078]">
              We believe emotional wellbeing deserves the same thoughtful
              attention as every other part of life. Our work brings a human
              perspective to personal challenges and organizational needs,
              with support shaped around the people in the room.
            </p>
            <p className="mt-5 text-base leading-8 text-[#587078]">
              From a one-to-one conversation to a team training or a
              consulting engagement, our aim is to create space for clarity,
              resilience, and sustainable progress.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-[#116d94]"
              href="/services"
            >
              Explore our services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
            <div className="max-w-2xl">
              <span className="eyebrow">What guides us</span>
              <h2 className="display-heading mt-5 text-4xl sm:text-5xl">
                A human approach, grounded in possibility.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((value, index) => (
                <article
                  className="rounded-[1.5rem] border border-[#e4ebe5] bg-[#fbfcfa] p-7"
                  key={value.title}
                >
                  <span className="font-serif text-lg text-brand-blue">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#647b80]">
                    {value.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-10 rounded-[2rem] bg-[#183a43] p-8 text-white sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow !text-[#b8d68b]">Our leadership</span>
              <h2 className="display-heading mt-5 text-4xl sm:text-5xl">
                Led with care and clinical experience.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Mosho Balaje Sheriff Ajibola is a clinical psychologist and
                psychotherapist. The practice brings that mental health
                perspective to its therapy, consulting, and workplace support.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="font-serif text-2xl">Our promise</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                To listen carefully, work thoughtfully, and help make the next
                step feel possible.
              </p>
            </div>
          </div>
        </section>

        <ContactCta
          description="Whether you are reaching out for yourself or your organization, we would be glad to hear what you are looking for."
          title="We’re here to listen."
        />
      </main>
    </div>
  );
}
