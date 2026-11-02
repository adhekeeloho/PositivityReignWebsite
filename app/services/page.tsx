import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ContactCta from "@/components/contact-cta";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description:
    "Explore therapy, consulting, training, employee assistance, and project management from PositivityReign Consult.",
};

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <main>
        <section className="relative overflow-hidden bg-[#f1f6ed]">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl float-slow" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
            <span className="eyebrow fade-up">How we can help</span>
            <h1 className="display-heading fade-up mt-6 max-w-4xl text-5xl [animation-delay:120ms] sm:text-6xl lg:text-7xl">
              Support for the person, the team, and the work.
            </h1>
            <p className="fade-up mt-7 max-w-2xl text-lg leading-8 text-[#587078] [animation-delay:240ms]">
              Explore our services, then get in touch to talk through what
              would be useful for you or your organization.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <div className="flex flex-col gap-14 lg:gap-24">
            {services.map((service, index) => {
              const flip = index % 2 === 1;
              return (
                <article
                  className="service-row grid items-center gap-8 scroll-mt-28 lg:grid-cols-2 lg:gap-16"
                  id={service.id}
                  key={service.title}
                >
                  <Reveal
                    className={flip ? "lg:order-2" : ""}
                    direction={flip ? "right" : "left"}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgb(23_75_82/14%)]">
                      <Image
                        alt={service.imageAlt}
                        className={`service-photo object-cover ${service.imagePosition}`}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        src={service.image}
                      />
                      <span className="absolute left-5 top-5 flex h-12 min-w-12 items-center justify-center rounded-full bg-white/90 px-3 font-serif text-lg text-[#397348] backdrop-blur">
                        0{index + 1}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={120} direction={flip ? "left" : "right"}>
                    <span className="inline-block rounded-full bg-[#eaf2e4] px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#397348]">
                      {service.audience}
                    </span>
                    <h2 className="mt-5 font-serif text-3xl leading-tight text-[#183a43] sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#587078]">
                      {service.description}
                    </p>
                    <p className="mt-4 border-l-2 border-brand-green pl-4 text-base leading-7 text-[#647b80]">
                      {service.detail}
                    </p>
                    <Link
                      className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-[#116d94]"
                      href="/contact"
                    >
                      Ask us about this service
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-14 lg:pb-24">
          <Reveal><div className="grid gap-8 rounded-[2rem] bg-[#eaf2e4] p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
            <div>
              <span className="eyebrow">Not sure where to start?</span>
              <h2 className="display-heading mt-5 text-4xl">
                We can figure it out together.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#587078]">
                A short conversation can help clarify which kind of support is
                right for your needs. Reach out by phone or email and tell us a
                little about what you are looking for.
              </p>
              <Link
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-[#116d94]"
                href="/contact"
              >
                Talk with us <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div></Reveal>
        </section>

        <ContactCta
          description="Tell us what kind of support you have in mind. We’ll take it from there, together."
          title="Let’s talk about what you need."
        />
      </main>
    </div>
  );
}
