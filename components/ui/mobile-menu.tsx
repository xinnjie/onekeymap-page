"use client";

import { Link } from "@/i18n/routing";
import NextLink from "next/link";
import Image from "next/image";
import { APP_STORE_URL } from "@/constants";
import DiscordLogo from "@/public/images/logo-discord.svg";
import { useState } from "react";

interface MobileMenuProps {
  translations: {
    features: string;
    docs: string;
    pricing: string;
    download: string;
  };
}

export default function MobileMenu({ translations }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      {/* Download button */}
      <Link
        href={APP_STORE_URL}
        className="btn-sm bg-blue-500 text-white shadow-sm hover:bg-blue-600"
      >
        {translations.download}
      </Link>

      {/* Hamburger menu button */}
      <button
        className="flex h-8 w-8 items-center justify-center text-gray-600 hover:text-gray-900"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 left-4 rounded-2xl bg-white/90 shadow-lg backdrop-blur-xs md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/#features"
                  className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations.features}
                </Link>
              </li>
              <li>
                <NextLink
                  href="/docs"
                  className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations.docs}
                </NextLink>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/fW3TWuXj9A"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src={DiscordLogo}
                    alt="Discord logo"
                    className="h-4 w-4"
                  />
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
