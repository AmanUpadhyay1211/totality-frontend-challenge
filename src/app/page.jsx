"use client";
import properties from "@/api/properties";
import {PropertyCard, ReviewSection} from "@/components/index";

export default function Home({ children }) {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1>Product listing app</h1>
      <div>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <ReviewSection/>
    </main>
  );
}
