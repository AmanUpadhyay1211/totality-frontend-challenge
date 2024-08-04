"use client";
import { useState, useEffect } from "react";
import properties from "@/api/properties";

import {
  HeroSection,
  PropertyCard,
  ReviewSection,
  Navbar,
  FilterBar,
} from "@/components/index";

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Filter logic here based on filters state
    let filtered = properties;

    if (filters.city) {
      filtered = filtered.filter((property) =>
        property.location.includes(filters.city)
      );
    }

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      filtered = filtered.filter(
        (property) => property.price >= minPrice && property.price <= maxPrice
      );
    }

    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter((property) =>
        filters.amenities.every((amenity) =>
          property.amenities.includes(amenity)
        )
      );
    }

    setFilteredProperties(filtered);
  }, [filters]);

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="relative w-[80vw] flex items-center justify-center">
        <Navbar className="" />
      </div>
      <HeroSection />
      <FilterBar setFilters={setFilters} />
      <div className="property-grid">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <ReviewSection />
    </main>
  );
}
