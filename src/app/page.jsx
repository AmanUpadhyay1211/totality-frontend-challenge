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

  const handleFilterChange = (filters) => {
    const { cities, amenities, bedrooms, priceRange } = filters;
    const newFilteredProperties = properties.filter((property) => {
      const matchesCity = cities.length === 0 || cities.includes(property.city);
      const matchesAmenities =
        amenities.length === 0 ||
        amenities.every((amenity) => property.amenities.includes(amenity));
      const matchesBedrooms =
        bedrooms.length === 0 || bedrooms.includes(property.bedrooms);
      const matchesPrice =
        property.price >= priceRange[0] && property.price <= priceRange[1];
      return (
        matchesCity && matchesAmenities && matchesBedrooms && matchesPrice
      );
    });
    setFilteredProperties(newFilteredProperties);
  };


  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="relative w-[80vw] flex items-center justify-center">
        <Navbar className="" />
      </div>
      <HeroSection />
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="property-grid grid-cols-2">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <ReviewSection />
    </main>
  );
}
