import type { Metadata } from "next";
import { Phone, Star } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCommitments } from "@/lib/reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description: `See how ${siteConfig.name} serves ${siteConfig.serviceAreaLabel} with HVAC install, service, and repair.`,
};

export default function ReviewsPage() {
  return (
    <section className="px-5 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer experience"
          title={`Trusted local HVAC help in ${siteConfig.county}`}
          subtitle={`${siteConfig.name} is an owner-operated, independent HVAC contractor serving ${siteConfig.county}. State License #1032964, Established 2017. For the fastest response, call ${siteConfig.phone}.`}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceCommitments.map((item) => (
            <article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-card">
              <Star className="text-orange" size={24} />
              <h2 className="mt-4 text-xl font-black text-navy">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-navy p-8 text-center text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange">
            Direct Owner-Operator Support
          </p>
          <h2 className="mt-4 text-3xl font-black">Speak With Anthony or Ronald</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Reach out directly for honest diagnostics, upfront pricing, and reliable heating & cooling services in {siteConfig.address.city} and throughout {siteConfig.county}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={siteConfig.phoneHref}>
              <Phone size={16} />
              Call {siteConfig.phone}
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Request Service
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
