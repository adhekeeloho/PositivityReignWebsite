import Image from "next/image";
import Link from "next/link";
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
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
            <span className="eyebrow">How we can help</span>
            <h1 className="display-heading mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
              Support for the person, the team, and the work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#587078]">
              Explore our services, then get in touch to talk through what
              would be useful for you or your organization.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                className="service-card flex flex-col overflow-hidden rounded-[1.7rem] border border-[#e1e9e3] bg-white"
                id={service.id}
                key={service.title}
              >
                <div className="relative h-56 w-full">
                  <Image
                    alt={service.imageAlt}
                    className={`object-cover ${service.imagePosition}`}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                    src={service.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4e5] font-serif text-xl text-[#397348]">
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-[#f2f7f9] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-brand-blue">
                    {service.audience}
                  </span>
                </div>
                <h2 className="mt-7 font-serif text-3xl text-[#183a43]">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#647b80]">
                  {service.description}
                </p>
                <p className="mt-5 border-t border-[#e8eeea] pt-5 text-sm leading-7 text-[#587078]">
                  {service.detail}
                </p>
                <Link
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-blue hover:text-[#116d94]"
                  href="/contact"
                >
                  Ask us about this service <span aria-hidden="true">↗</span>
                </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-14 lg:pb-24">
          <div className="grid gap-8 rounded-[2rem] bg-[#eaf2e4] p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
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
          </div>
        </section>

        <ContactCta
          description="Tell us what kind of support you have in mind. We’ll take it from there, together."
          title="Let’s talk about what you need."
        />
      </main>
    </div>
  );
}
