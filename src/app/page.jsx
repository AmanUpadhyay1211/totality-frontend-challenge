"use client";
import properties from "@/api/properties";
import envConf from "@/envConf/envConf";

export default function Home({ children }) {
  console.log(envConf.appwriteEndpoint,envConf.appwriteProjectID,envConf.appwriteDatabaseID,envConf.appwriteCollectionID,envConf.appwriteBucketID)
  return (
    <main>
        <h1>Product listing app</h1>
           <div>
          {properties.map((property) => (
            <div key={property.id}>
              <h2>{property.title}</h2>
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
              <p>Location: {property.location}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Amenities: {property.amenities.join(", ")}</p>
              <p>Rating: {property.rating}</p>
              {property.images.map((image, index) => (
                <img key={index} src={image} alt={property.title} />
              ))}
            </div>
          ))}
        </div>
        {children}

    </main>
  );
}
