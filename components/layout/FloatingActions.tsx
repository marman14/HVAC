"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function FloatingActions() {
  return (
    <>
      {/* Emergency side tab */}
      <Link
        href="/contact"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-2xl bg-orange-gradient px-3 py-5 shadow-glow transition-all duration-300 hover:pr-4 md:block"
        aria-label="Emergency HVAC service"
      >
        <span className="[writing-mode:vertical-rl] text-xs font-black uppercase tracking-[0.2em] text-white">
          🚨 Emergency
        </span>
      </Link>

      {/* Phone pill */}
      <a
        href={siteConfig.phoneHref}
        className="fixed bottom-6 right-5 z-40 hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-navy shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:inline-flex border border-slate-100"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
        </span>
        <Phone size={15} className="text-orange" />
        Call {siteConfig.phone}
      </a>
    </>
  );
}
