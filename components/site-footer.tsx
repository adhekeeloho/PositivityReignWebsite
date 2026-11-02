import Link from "next/link";
import SiteLogo from "@/components/site-logo";
import { contact, navigation, services } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="bg-[#183a43] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.2fr_0.7fr_1fr] lg:px-14 lg:py-16">
        <div>
          <Link
            aria-label="PositivityReign Consult home"
            className="inline-flex items-center gap-3"
            href="/"
          >
            <SiteLogo className="h-auto w-44 object-contain" />
          </Link>
          <p className="mt-5 max-w-sm font-serif text-xl leading-8 text-white/85">
            Transforming Lives, Elevating Societies.
          </p>
          <p className="mt-3 text-sm text-white/60">{contact.location}</p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8d68b]">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-white/75 transition hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8d68b]">
            Get in touch
          </h2>
          <a
            className="mt-5 block text-sm text-white/75 transition hover:text-white"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="mt-3 block text-sm text-white/75 transition hover:text-white"
            href={`tel:${contact.telephoneLink}`}
          >
            {contact.phone}
          </a>
          <p className="mt-5 max-w-sm text-xs leading-6 text-white/55">
            {services.map((service) => service.title).join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p>© PositivityReign Consult</p>
          <p>Transforming Lives, Elevating Societies.</p>
        </div>
      </div>
    </footer>
  );
}
