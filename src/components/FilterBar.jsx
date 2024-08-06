"use client"
import React, { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const Amenities = [
    "WiFi",
    "Free Parking",
    "Pet Friendly",
    "Breakfast Included",
    "Washer/Dryer",
    "Kitchen",
    "BBQ Grill",
    "Air Conditioning",
    "Fireplace",
    "Gym",
  ];

  const Cities = [
    "Goa, India",
    "Mumbai, India",
    "Bangalore, India",
    "Manali, India",
    "New Delhi, India",
    "Ooty, India",
    "Coorg, India",
    "Nainital, India",
    "Pune, India",
    "Jaipur, India",
  ];

  const Bedrooms = [
    "1 bedroom",
    "2 bedrooms",
    "3 bedrooms",
    "4 bedrooms",
    "5 bedrooms",
  ];

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [priceRange, setPriceRange] = useState([250, 1200]);

  const handleCityChange = (city) => {
    const newSelectedCities = selectedCities.includes(city)
      ? selectedCities.filter((c) => c !== city)
      : [...selectedCities, city];
    setSelectedCities(newSelectedCities);
    onFilterChange({
      cities: newSelectedCities,
      amenities: selectedAmenities,
      bedrooms: selectedBedrooms,
      priceRange,
    });
  };

  const handleAmenityChange = (amenity) => {
    const newSelectedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(newSelectedAmenities);
    onFilterChange({
      cities: selectedCities,
      amenities: newSelectedAmenities,
      bedrooms: selectedBedrooms,
      priceRange,
    });
  };

  const handleBedroomChange = (bedroom) => {
    const newSelectedBedrooms = selectedBedrooms.includes(bedroom)
      ? selectedBedrooms.filter((b) => b !== bedroom)
      : [...selectedBedrooms, bedroom];
    setSelectedBedrooms(newSelectedBedrooms);
    onFilterChange({
      cities: selectedCities,
      amenities: selectedAmenities,
      bedrooms: newSelectedBedrooms,
      priceRange,
    });
  };

  const handlePriceChange = (event) => {
    const newPriceRange = [event.target.value, priceRange[1]];
    setPriceRange(newPriceRange);
    onFilterChange({
      cities: selectedCities,
      amenities: selectedAmenities,
      bedrooms: selectedBedrooms,
      priceRange: newPriceRange,
    });
  };

  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm dark:text-white">Cities:</label>
        {Cities.map((city) => (
          <div key={city} className="flex items-center">
            <input
              type="checkbox"
              value={city}
              onChange={() => handleCityChange(city)}
              checked={selectedCities.includes(city)}
            />
            <span className="ml-2 dark:text-white">{city}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm dark:text-white">Amenities:</label>
        {Amenities.map((amenity) => (
          <div key={amenity} className="flex items-center">
            <input
              type="checkbox"
              value={amenity}
              onChange={() => handleAmenityChange(amenity)}
              checked={selectedAmenities.includes(amenity)}
            />
            <span className="ml-2 dark:text-white">{amenity}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm dark:text-white">Bedrooms:</label>
        {Bedrooms.map((bedroom) => (
          <div key={bedroom} className="flex items-center">
            <input
              type="checkbox"
              value={bedroom}
              onChange={() => handleBedroomChange(bedroom)}
              checked={selectedBedrooms.includes(bedroom)}
            />
            <span className="ml-2 dark:text-white">{bedroom}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm dark:text-white">Price Range:</label>
        <input
          type="range"
          min="250"
          max="1200"
          value={priceRange[0]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <span className="dark:text-white">${priceRange[0]} - ${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default FilterBar;
