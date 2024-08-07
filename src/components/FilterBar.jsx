"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const FilterBar = ({ onFilterChange, availableProperties }) => {
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

  const Bedrooms = [1, 2, 3, 4, 5];

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [priceRange, setPriceRange] = useState([250, 1200]);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isAmenityOpen, setIsAmenityOpen] = useState(false);
  const [isBedroomOpen, setIsBedroomOpen] = useState(false);

  const handleCityChange = (city) => {
    const newSelectedCities = selectedCities.includes(city)
      ? selectedCities.filter((c) => c !== city)
      : [...selectedCities, city];
    setSelectedCities(newSelectedCities);
    console.log("Selected Cities:", newSelectedCities);
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
    console.log("Selected Amenities:", newSelectedAmenities);
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
    console.log("Selected Bedrooms:", newSelectedBedrooms);
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
    console.log("Selected Price Range:", newPriceRange);
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
        <button onClick={() => setIsCityOpen(!isCityOpen)} className="text-sm dark:text-white">Cities</button>
        <Transition
          show={isCityOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
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
        </Transition>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => setIsAmenityOpen(!isAmenityOpen)} className="text-sm dark:text-white">Amenities</button>
        <Transition
          show={isAmenityOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
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
        </Transition>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => setIsBedroomOpen(!isBedroomOpen)} className="text-sm dark:text-white">Bedrooms</button>
        <Transition
          show={isBedroomOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
            {Bedrooms.map((bedroom) => (
              <div key={bedroom} className="flex items-center">
                <input
                  type="checkbox"
                  value={bedroom}
                  onChange={() => handleBedroomChange(bedroom)}
                  checked={selectedBedrooms.includes(bedroom)}
                />
                <span className="ml-2 dark:text-white">{bedroom} bedrooms</span>
              </div>
            ))}
          </div>
        </Transition>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm dark:text-white">Price Range:</label>
        <input
          type="range"
          min="250"
          max="1200"
          value={priceRange[0]}
          onChange={handlePriceChange}
          className="slider"
        />
        <div className="flex items-center justify-center">
          <span className="text-sm dark:text-white">{priceRange[0]}</span>
          <span> --- </span>
          <span className="text-sm dark:text-white">1200$</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-green-600 dark:text-green-400">
          {availableProperties} houses available
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
