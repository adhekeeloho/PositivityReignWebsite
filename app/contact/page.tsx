import Link from "next/link";
import SocialIcon, { type SocialPlatform } from "@/components/social-icon";
import { contact } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Contact PositivityReign Consult in Lagos, Nigeria, by phone or email.",
};

const socialProfiles: { handle: string; platforms: SocialPlatform[] }[] = [
  { handle: "@moshobalajesheriff", platforms: ["linkedin", "instagram"] },
  { handle: "@moshoba_sheriff", platforms: ["x"] },
  { handle: "moshobalaje sheriff ajibola", platforms: ["facebook"] },
];

const platformNames: Record<SocialPlatform, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  x: "X",
  facebook: "Facebook",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <main>
        <section className="relative overflow-hidden bg-[#f1f6ed]">
          <div className="soft-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
            <span className="eyebrow">Get in touch</span>
            <h1 className="display-heading mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
              Your next step can start here.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#587078]">
              Reach out by phone or email. Whether you are looking for
              individual support or exploring services for your organization,
              we would be glad to hear from you.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.85fr] lg:px-14 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              className="service-card group rounded-[1.6rem] border border-[#e1e9e3] bg-white p-7"
              href="tel:+2348096950650"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4e5] text-brand-blue">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m7.4 3.8 2.3 3.7-1.8 1.8a15 15 0 0 0 6.8 6.8l1.8-1.8 3.7 2.3-.8 3.7c-.2.8-1 1.3-1.8 1.2C9.8 20.3 3.7 14.2 2.5 6.4c-.1-.8.4-1.6 1.2-1.8l3.7-.8Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.14em] text-[#72868a]">
                Call us
              </span>
              <span className="mt-2 block font-serif text-xl text-[#183a43]">
                +234 809 695 0650
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                Call PositivityReign <span aria-hidden="true">↗</span>
              </span>
            </a>

            <a
              className="service-card group rounded-[1.6rem] border border-[#e1e9e3] bg-white p-7 sm:col-span-2 sm:row-start-2"
              href="mailto:moshobalajesheriff@gmail.com"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4e5] text-brand-blue">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.14em] text-[#72868a]">
                Email us
              </span>
              <span className="mt-2 block break-all font-serif text-xl text-[#183a43] sm:whitespace-nowrap sm:break-normal">
                moshobalajesheriff@gmail.com
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                Send an email <span aria-hidden="true">↗</span>
              </span>
            </a>

            <div className="rounded-[1.6rem] border border-[#e1e9e3] bg-white p-7 sm:col-start-2 sm:row-start-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4e5] text-brand-blue">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.14em] text-[#72868a]">
                Location
              </span>
              <span className="mt-2 block font-serif text-2xl text-[#183a43]">
                {contact.location}
              </span>
              <p className="mt-2 text-sm leading-7 text-[#647b80]">
                Get in touch to discuss the right way to connect.
              </p>
            </div>
          </div>

          <aside className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#183a43] p-8 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-brand-green/40" />
            <div className="relative">
              <span className="eyebrow !text-[#b8d68b]">PositivityReign Consult</span>
              <h2 className="display-heading mt-6 text-4xl">
                Transforming Lives, Elevating Societies.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
                Consulting · Mental Health Therapy · Training · EAP · Project
                Management
              </p>
            </div>
            <div className="relative mt-10 border-t border-white/15 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b8d68b]">
                Social profiles
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/80">
                {socialProfiles.map((profile) => (
                  <li className="flex items-center gap-3" key={profile.handle}>
                    <span className="flex w-10 shrink-0 items-center gap-1.5 text-[#b8d68b]">
                      {profile.platforms.map((platform) => (
                        <span key={platform} title={platformNames[platform]}>
                          <SocialIcon platform={platform} />
                          <span className="sr-only">
                            {platformNames[platform]}
                          </span>
                        </span>
                      ))}
                    </span>
                    {profile.handle}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-14 lg:pb-24">
          <div className="rounded-[1.75rem] border border-[#e3ebe5] bg-white px-7 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-10">
            <div>
              <h2 className="font-serif text-2xl text-[#183a43]">
                Not sure what to ask?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-[#647b80]">
                A simple message is enough. Share what you are looking for, and
                we can take the conversation from there.
              </p>
            </div>
            <Link
              className="mt-6 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-[#116d94] sm:mt-0"
              href="mailto:moshobalajesheriff@gmail.com"
            >
              Email PositivityReign
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
