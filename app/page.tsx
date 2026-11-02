import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ContactCta from "@/components/contact-cta";
import { services } from "@/lib/site-data";

const principles = [
  {
    number: "01",
    title: "Meet you where you are",
    copy: "Support starts with listening. Your experiences, needs, and goals shape the conversation.",
  },
  {
    number: "02",
    title: "Make room for progress",
    copy: "We focus on thoughtful, practical steps that can fit into real life and work.",
  },
  {
    number: "03",
    title: "Build wellbeing together",
    copy: "Individuals and organizations can create healthier ways to live, work, and grow.",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <main>
        <section className="relative isolate overflow-hidden bg-[#f8faf8]">
          <div className="pointer-events-none absolute -right-36 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#e8f1dc] opacity-70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 -left-36 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#e0f0f3] opacity-65 blur-3xl" />
          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-8 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:px-14 lg:pb-24 lg:pt-20">
            <div className="relative z-10 max-w-2xl">
              <span className="eyebrow fade-up">Mental health · Wellbeing · Growth</span>
              <h1 className="display-heading fade-up mt-7 text-[3.55rem] [animation-delay:120ms] text-[#183a43] sm:text-6xl lg:text-[4.5rem]">
                Make space for a life that feels{" "}
                <span className="relative whitespace-nowrap text-brand-blue">
                  more like you.
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 310 14"
                    fill="none"
                  >
                    <path
                      d="M3 9.5C80 3.5 213 2.5 307 8.5"
                      stroke="#9CC55F"
                      strokeLinecap="round"
                      strokeWidth="5"
                    />
                  </svg>
                </span>
              </h1>
              <p className="fade-up mt-7 max-w-xl text-lg leading-8 text-[#587078] [animation-delay:240ms] sm:text-xl sm:leading-9">
                Thoughtful mental health support and practical guidance for
                individuals, teams, and communities.
              </p>
              <p className="fade-up mt-4 max-w-lg text-sm leading-7 text-[#587078] [animation-delay:340ms]">
                PositivityReign Consult helps people find clarity, strengthen
                wellbeing, and move forward with confidence.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-blue px-7 text-sm font-bold text-white shadow-[0_12px_28px_rgba(21,128,172,0.2)] transition hover:-translate-y-0.5 hover:bg-[#116d94] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  href="/contact"
                >
                  Start a conversation
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d6e0dd] bg-white/70 px-7 text-sm font-bold text-[#183a43] transition hover:border-brand-blue hover:text-brand-blue"
                  href="/services"
                >
                  Explore our services
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-[#587078]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f1dc] text-brand-blue">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 18s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="10"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                Rooted in Lagos, Nigeria
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[530px] items-center justify-center">
              <div className="hero-orbit float-slow" />
              <div className="hero-glow" />
              <div className="float-slow absolute right-[5%] top-[13%] h-16 w-16 rounded-full bg-brand-green/80 blur-[1px]" />
              <div className="float-slow absolute bottom-[13%] left-[5%] [animation-delay:-4s] h-24 w-24 rounded-full bg-brand-blue/10" />
              <div className="absolute left-[13%] top-[21%] h-3 w-3 rounded-full bg-brand-blue" />
              <div className="hero-logo-card fade-up relative [animation-delay:200ms] z-10 aspect-[4/5] w-[66%] overflow-hidden rounded-[2rem] border-4 border-white bg-white">
                <Image
                  alt="A calm woman with her eyes closed, breathing in a bright, peaceful room"
                  className="object-cover object-[30%_40%]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 350px, 70vw"
                  src="/images/hero-calm.jpg"
                />
              </div>
              <div className="absolute bottom-[12%] right-[4%] z-20 max-w-[205px] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_15px_36px_rgba(23,75,82,0.1)] backdrop-blur">
                <span className="mb-2 block h-1 w-8 rounded-full bg-brand-green" />
                <p className="font-serif text-lg leading-6 text-[#183a43]">
                  Transforming lives, elevating societies.
                </p>
              </div>
              <div className="absolute left-[1%] top-[64%] z-20 rounded-full border border-[#dfe8df] bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-[#397348] shadow-sm">
                A little more room to grow
              </div>
            </div>
          </div>
          <div className="border-y border-[#e5ebe6] bg-white/60">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.13em] text-[#587078] sm:gap-x-12 sm:px-10 lg:justify-between lg:px-14">
              <span>Consulting</span>
              <span className="hidden h-1 w-1 rounded-full bg-brand-green sm:block" />
              <span>Mental health therapy</span>
              <span className="hidden h-1 w-1 rounded-full bg-brand-green sm:block" />
              <span>Training</span>
              <span className="hidden h-1 w-1 rounded-full bg-brand-green sm:block" />
              <span>Employee wellbeing</span>
              <span className="hidden h-1 w-1 rounded-full bg-brand-green sm:block" />
              <span>Project management</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal direction="left">
              <span className="eyebrow">A thoughtful place to begin</span>
              <h2 className="display-heading mt-5 max-w-xl text-4xl sm:text-5xl">
                Wellbeing is not one-size-fits-all.
              </h2>
            </Reveal>
            <Reveal className="lg:justify-self-end" delay={120} direction="right">
            <p className="max-w-2xl text-base leading-8 text-[#587078] lg:text-lg">
              Life can ask a lot of us. Whether you are seeking support for
              yourself or looking to create a healthier workplace, we bring
              care, perspective, and practical next steps to the conversation.
            </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal className="h-full" delay={(index % 3) * 110} key={service.title}>
              <Link
                className="service-card group flex h-full min-h-[245px] flex-col overflow-hidden rounded-[1.6rem] border border-[#e1e9e3] bg-white"
                href={`/services#${service.id}`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    alt={service.imageAlt}
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.imagePosition}`}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    src={service.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf4e5] font-serif text-lg text-[#397348]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl text-brand-blue transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-2xl text-[#183a43]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#647b80]">
                  {service.summary}
                </p>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-[#116d94]"
              href="/services"
            >
              See how we can support you <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#eaf2e4]">
          <div className="soft-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-14 lg:py-28">
            <Reveal direction="left">
              <span className="eyebrow">Our approach</span>
              <h2 className="display-heading mt-5 max-w-md text-4xl sm:text-5xl">
                Progress can begin with one honest conversation.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-[#587078]">
                No pressure to have everything figured out. We start with what
                matters to you, then explore what support could look like.
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-[#116d94]"
                href="/about"
              >
                Get to know us <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
            <div className="grid gap-3">
              {principles.map((principle, index) => (
                <Reveal delay={index * 120} direction="right" key={principle.number}>
                <article
                  className="service-card grid gap-4 rounded-2xl border border-white/80 bg-white/75 p-5 sm:grid-cols-[54px_1fr] sm:p-6"
                >
                  <span className="font-serif text-xl text-brand-blue">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#183a43]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#647b80]">
                      {principle.copy}
                    </p>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactCta
          description="You do not need to have the perfect words. Reach out, tell us a little about what you need, and we can take it from there."
          title="Let’s find a good next step."
        />
      </main>
    </div>
  );
}
