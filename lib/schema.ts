import { cities } from "@/lib/cities";
import { type Service } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export function localBusinessSchema() {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email || undefined,
    priceRange: "$$",
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      ...(siteConfig.address.street
        ? { streetAddress: siteConfig.address.street }
        : {}),
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      ...(siteConfig.address.zip ? { postalCode: siteConfig.address.zip } : {}),
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: `${city}, TX`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        closes: "17:00",
      },
    ],
    sameAs,
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "HVACBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.county,
    },
  };
}

export function faqSchema(faqs: Service["faqs"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
