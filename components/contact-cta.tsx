import Image from "next/image";
import Link from "next/link";

type ContactCtaProps = {
  description: string;
  title: string;
};

export default function ContactCta({
  description,
  title,
}: ContactCtaProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-14 lg:pb-28">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-blue px-7 py-12 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <Image
          alt=""
          className="-z-10 object-cover opacity-25 mix-blend-luminosity"
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          src="/images/cta-calm.jpg"
        />
        <div className="pointer-events-none absolute -right-12 -top-32 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-2 -top-20 h-52 w-52 rounded-full border border-brand-green/35" />
        <div className="relative max-w-2xl">
          <span className="eyebrow !text-[#d6eab7]">A good place to begin</span>
          <h2 className="display-heading mt-5 text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            {description}
          </p>
        </div>
        <Link
          className="relative mt-8 inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-brand-blue transition hover:-translate-y-0.5 hover:bg-[#edf4e5] lg:mt-0"
          href="/contact"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
