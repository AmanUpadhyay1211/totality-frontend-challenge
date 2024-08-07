"use client";
import { useState, useEffect } from "react";
import properties from "@/api/properties";

import {
  HeroSection,
  PropertyCard,
  ReviewSection,
  Navbar,
  FilterBar, Fotter
} from "@/components/index";

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (filters) => {
    console.log("Filters:", filters);
    const { cities, amenities, bedrooms, priceRange } = filters;
    const newFilteredProperties = properties.filter((property) => {
      const matchesCity = cities.length === 0 || cities.includes(property.location);
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
    console.log("Filtered Properties:", newFilteredProperties);
    setFilteredProperties(newFilteredProperties);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <ReviewSection />
      <Fotter />
    </main>
  );
}
