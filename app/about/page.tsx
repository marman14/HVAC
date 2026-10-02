import type { Metadata } from "next";
import { CheckCircle2, Clock, MapPin, Phone, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, a licensed HVAC contractor serving ${siteConfig.serviceAreaLabel}.`,
};

export default function AboutPage() {
  const locationLabel = [
    siteConfig.address.street,
    [siteConfig.address.city, siteConfig.address.state].filter(Boolean).join(", "),
    siteConfig.address.zip,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="px-5 py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="About us"
          title="Local HVAC service built around clear communication"
          subtitle={`${siteConfig.name} is a licensed and insured AC and heating contractor serving ${siteConfig.serviceAreaLabel}. We offer install, service, and repair for residential and commercial customers.`}
        />
        <div className="rounded-[2rem] bg-grey p-8">
          <div className="grid gap-5">
            {[
              "Licensed & insured HVAC/R contractor",
              siteConfig.license,
              "Residential and commercial install, service, and repair",
              "Financing available. Call or email for details",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-orange" size={22} />
                <p className="font-bold text-navy">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl bg-white p-5 shadow-card">
            <div className="flex items-center gap-3 text-sm font-semibold text-navy">
              <MapPin size={18} className="text-orange" />
              {locationLabel}
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-navy">
              <Phone size={18} className="text-orange" />
              {siteConfig.phone}
            </div>
            {siteConfig.email ? (
              <div className="flex items-center gap-3 text-sm font-semibold text-navy">
                <Mail size={18} className="text-orange" />
                {siteConfig.email}
              </div>
            ) : null}
            <div className="flex items-center gap-3 text-sm font-semibold text-navy">
              <Clock size={18} className="text-orange" />
              {siteConfig.hours.join(" · ")}
            </div>
          </div>

          <ButtonLink href="/contact" className="mt-8">
            Schedule Service
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
