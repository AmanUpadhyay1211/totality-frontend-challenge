import Image from "next/image";
import properties from "@/api/properties";
import { Property } from "@/api/types";

export default function Home() {
  return (
    <main>
      <h1>Product listing app</h1>
      <div>
        {properties.map((property: Property) => (
          <div key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Amenities: {property.amenities.join(', ')}</p>
            <p>Rating: {property.rating}</p>
            {property.images.map((image, index) => (
              <img key={index} src={image} alt={property.title} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
