import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Briefcase } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const companyName = "Carrer Nexus";

export const metadata: Metadata = {
  title: companyName,
  description:
    "Discover your dream job from a curated selection of opportunities at the world's leading companies, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="px-4 lg:px-6 h-14 flex items-center border-b">
            <Link className="flex items-center justify-center" href="/">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold">CarrerNexus</span>
            </Link>
            <nav className="ml-auto md:flex gap-4 sm:gap-6 hidden">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/companies"
              >
                Companies
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/contact"
              >
                Contact
              </Link>
              {/* <Link */}
              {/*   className="text-sm font-medium hover:underline underline-offset-4" */}
              {/*   href="/login" */}
              {/* > */}
              {/*   Login */}
              {/* </Link> */}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 CarrerNexus Inc. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
