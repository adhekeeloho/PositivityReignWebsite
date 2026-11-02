import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PositivityReign Consult | Transforming Lives, Elevating Societies",
    template: "%s | PositivityReign Consult",
  },
  description:
    "Mental health therapy, consulting, training, employee assistance, and project management in Lagos, Nigeria.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en-NG">
      <body className="min-h-full">
        <a
          className="skip-link rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-blue shadow-lg focus:outline-2 focus:outline-brand-blue"
          href="#main-content"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
