"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SiteLogo from "@/components/site-logo";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[#e4ebe6] bg-[#f8faf8]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-10 lg:px-14">
        <Link
          aria-label="PositivityReign Consult home"
          className="flex items-center gap-2.5"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block h-[66px] overflow-hidden sm:h-[72px]">
            <SiteLogo className="h-[76px] w-auto max-w-none shrink-0 sm:h-[72px]" />
          </span>
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6df] text-[#183a43] md:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {menuOpen ? (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          )}
        </button>

        <nav
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#e4ebe6] bg-[#f8faf8] px-5 py-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          id="primary-navigation"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition md:px-0 md:py-1 ${
                  isActive
                    ? "text-brand-blue"
                    : "text-[#587078] hover:text-brand-blue"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-[#116d94] md:ml-1 md:mt-0"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
