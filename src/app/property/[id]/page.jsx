"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import properties from "@/api/properties";

function PropertyPage() {
  const params = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const id = params?.id;
    console.log('Params:', params);
    console.log('ID:', id);

    if (id) {
      const foundProperty = properties.find((item) => item.id === Number(id));
      console.log('Found Property:', foundProperty);
      setProperty(foundProperty);
    }
  }, [params]);

  if (!property) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3">
            <div className="flex flex-col space-y-4">
              <Image 
                src={property.images[0]} 
                height={100} 
                width={100} 
                alt="thumbnail" 
                className="rounded-md shadow-lg w-full h-auto"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
                {Array(5).fill(property.images[0]).map((img, index) => (
                  <Image 
                    key={index}
                    src={img} 
                    height={200} 
                    width={300} 
                    alt={`thumbnail-${index}`} 
                    className="rounded-md shadow-lg w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 mt-4 lg:mt-0">
            <div className="bg-white p-4 rounded-md shadow-lg">
              <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
              <p className="text-gray-700 mb-2">{property.description}</p>
              <p className="text-gray-900 font-semibold mb-2">Rating: {property.rating}</p>
              <p className="text-gray-900 font-semibold mb-2">Price: ₹ {property.price}</p>
              <p className="text-gray-900 font-semibold mb-2">Location: {property.location}</p>
              <p className="text-gray-900 font-semibold mb-2">Bedrooms: {property.bedrooms}</p>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                <ul className="list-disc pl-5">
                  {property.amenities.map((amenity, index) => (
                    <li key={index} className="text-gray-700">{amenity}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
