// properties.js
import Images from "./images";
const properties= [
  {
    id: 1,
    title: 'Luxurious Beachfront Villa',
    description: 'Stunning villa located right on the beach, offering breathtaking ocean views.',
    price: 500,
    location: 'Goa, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Infinity Pool', 'Hot Tub', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Gym', 'Sauna', 'Private Chef'],
    images: [Images[0]],
    rating: '4.5/5 (500)',
    quantity : 1
  },
  {
    id: 2,
    title: 'Cozy Mountain Cabin',
    description: 'A cozy cabin in the mountains with a beautiful view and peaceful surroundings.',
    price: 300,
    location: 'Manali, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Fireplace', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Hot Tub', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Game Room'],
    images: [Images[1]],
    rating: '4.7/5 (300)',
    quantity : 1
  },
  {
    id: 3,
    title: 'Modern City Loft',
    description: 'A stylish loft in the city center with modern amenities and a great view.',
    price: 600,
    location: 'New Delhi, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Gym', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'Cable TV', 'Rooftop Access'],
    images: [Images[3]],
    rating: '4.8/5 (450)',
    quantity : 1
  },
  {
    id: 4,
    title: 'Spacious Suburban House',
    description: 'A large house in the suburbs, perfect for families and groups.',
    price: 400,
    location: 'Bangalore, India',
    bedrooms: 4,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Game Room', 'Private Yard'],
    images: [Images[4]],
    rating: '4.6/5 (400)',
    quantity : 1
  },
  {
    id: 5,
    title: 'Charming Countryside Cottage',
    description: 'A quaint cottage in the countryside, ideal for a quiet getaway.',
    price: 250,
    location: 'Ooty, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Game Room', 'Private Yard'],
    images: [Images[5]],
    rating: '4.5/5 (350)',
    quantity : 1
  },
  {
    id: 6,
    title: 'Luxury Penthouse Suite',
    description: 'An exclusive penthouse suite with panoramic city views and premium amenities.',
    price: 1200,
    location: 'Mumbai, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Infinity Pool', 'Hot Tub', 'Free Parking', 'Gym', 'Sauna', 'Private Chef', 'Breakfast Included', 'Rooftop Access'],
    images: [Images[6]],
    rating: '4.9/5 (200)',
    quantity : 1
  },
  {
    id: 7,
    title: 'Secluded Forest Retreat',
    description: 'A peaceful retreat in the forest, perfect for nature lovers.',
    price: 350,
    location: 'Coorg, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Hot Tub', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard'],
    images: [Images[7]],
    rating: '4.7/5 (300)',
    quantity : 1
  },
  {
    id: 8,
    title: 'Beachfront Bungalow',
    description: 'A cozy bungalow right on the beach, offering stunning sea views.',
    price: 450,
    location: 'Goa, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Beach', 'Rooftop Access'],
    images: [Images[8]],
    rating: '4.6/5 (350)',
    quantity : 1
  },
  {
    id: 9,
    title: 'Modern City Apartment',
    description: 'A modern apartment in the heart of the city with all the necessary amenities.',
    price: 450,
    location: 'Mumbai, India',
    bedrooms: 1,
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Gym', 'Free Parking', 'Pet Friendly', 'Washer/Dryer', 'Cable TV', 'Breakfast Included', 'Rooftop Access'],
    images: [Images[9]],
    rating: '4.6/5 (450)',
    quantity : 1
  },
  {
    id: 10,
    title: 'Rustic Lakeside Cabin',
    description: 'A charming cabin by the lake with serene views and cozy interiors.',
    price: 400,
    location: 'Nainital, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Fireplace', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Hot Tub', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Dock'],
    images: [Images[10]],
    rating: '4.7/5 (250)',
    quantity: 1
  },
  {
    id: 11,
    title: 'Elegant Downtown Condo',
    description: 'A sleek and modern condo in the heart of the city, close to all attractions.',
    price: 550,
    location: 'Mumbai, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Gym', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'Cable TV', 'Rooftop Access'],
    images: [Images[11]],
    rating: '4.8/5 (220)',
    quantity: 1
  },
  {
    id: 12,
    title: 'Historic Castle Stay',
    description: 'Live like royalty in this historic castle with antique furnishings and beautiful gardens.',
    price: 1000,
    location: 'Jaipur, India',
    bedrooms: 5,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Tour Guide'],
    images: [Images[12]],
    rating: '4.9/5 (150)',
    quantity: 1
  },
  {
    id: 13,
    title: 'Tranquil Farmhouse',
    description: 'Experience the tranquility of farm life in this spacious farmhouse.',
    price: 350,
    location: 'Pune, India',
    bedrooms: 4,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Farm Animals'],
    images: [Images[13]],
    rating: '4.7/5 (275)',
    quantity: 1
  },
  {
    id: 14,
    title: 'Chic Urban Studio',
    description: 'A stylish studio apartment with modern amenities in the city center.',
    price: 300,
    location: 'Bangalore, India',
    bedrooms: 1,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Gym', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'Cable TV', 'Rooftop Access'],
    images: [Images[14]],
    rating: '4.6/5 (400)',
    quantity: 1
  },
  {
    id: 15,
    title: 'Seaside Villa',
    description: 'A luxurious villa by the sea, offering stunning ocean views and private beach access.',
    price: 700,
    location: 'Chennai, India',
    bedrooms: 4,
    amenities: ['WiFi', 'Air Conditioning', 'Infinity Pool', 'Hot Tub', 'Free Parking', 'Private Beach', 'Breakfast Included', 'Gym', 'Sauna', 'Private Chef'],
    images: [Images[15]],
    rating: '4.8/5 (230)',
    quantity: 1
  },
  {
    id: 16,
    title: 'Luxury Treehouse',
    description: 'Stay in a luxurious treehouse surrounded by nature with all modern amenities.',
    price: 450,
    location: 'Munnar, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Hot Tub', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Nature Trails'],
    images: [Images[16]],
    rating: '4.9/5 (190)',
    quantity: 1
  },
  {
    id: 17,
    title: 'Romantic Cottage',
    description: 'A cozy and romantic cottage perfect for couples looking for a peaceful retreat.',
    price: 300,
    location: 'Darjeeling, India',
    bedrooms: 1,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Garden'],
    images: [Images[17]],
    rating: '4.7/5 (210)',
    quantity: 1
  },
  {
    id: 18,
    title: 'Spacious Family Villa',
    description: 'A large villa perfect for families, with plenty of space and kid-friendly amenities.',
    price: 500,
    location: 'Hyderabad, India',
    bedrooms: 5,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Game Room', 'Private Yard'],
    images: [Images[18]],
    rating: '4.6/5 (275)',
    quantity: 1
  },
  {
    id: 19,
    title: 'Mountain View Chalet',
    description: 'A beautiful chalet with stunning mountain views and luxurious amenities.',
    price: 600,
    location: 'Shimla, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Hot Tub', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Fireplace', 'Private Yard'],
    images: [Images[19]],
    rating: '4.8/5 (300)',
    quantity: 1
  },
  {
    id: 20,
    title: 'Eco-Friendly Bamboo House',
    description: 'A unique eco-friendly bamboo house surrounded by lush greenery.',
    price: 400,
    location: 'Kerala, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Nature Trails', 'Organic Farm'],
    images: [Images[20]],
    rating: '4.7/5 (200)',
    quantity: 1
  },
  {
    id: 21,
    title: 'Urban Penthouse Loft',
    description: 'A luxurious penthouse loft with stunning city views and top-notch amenities.',
    price: 800,
    location: 'Pune, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Infinity Pool', 'Hot Tub', 'Free Parking', 'Gym', 'Sauna', 'Private Chef', 'Breakfast Included', 'Rooftop Access'],
    images: [Images[21]],
    rating: '4.9/5 (180)',
    quantity: 1
  },
  {
    id: 22,
    title: 'Charming Vineyard Cottage',
    description: 'A charming cottage set within a beautiful vineyard, perfect for wine lovers.',
    price: 350,
    location: 'Nashik, India',
    bedrooms: 2,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Wine Tours'],
    images: [Images[22]],
    rating: '4.8/5 (220)',
    quantity: 1
  },
  {
    id: 23,
    title: 'Lavish Desert Villa',
    description: 'A stunning villa in the desert offering luxurious comfort and beautiful sunsets.',
    price: 700,
    location: 'Jaisalmer, India',
    bedrooms: 4,
    amenities: ['WiFi', 'Air Conditioning', 'Infinity Pool', 'Hot Tub', 'Free Parking', 'Breakfast Included', 'Gym', 'Sauna', 'Private Chef', 'Camel Rides'],
    images: [Images[23]],
    rating: '4.8/5 (240)',
    quantity: 1
  },
  {
    id: 24,
    title: 'Modern Ski Chalet',
    description: 'A modern chalet near popular ski resorts, perfect for winter sports enthusiasts.',
    price: 500,
    location: 'Gulmarg, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Hot Tub', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Fireplace', 'Ski-In/Ski-Out'],
    images: [Images[24]],
    rating: '4.9/5 (190)',
    quantity: 1
  },
  {
    id: 25,
    title: 'Historic Mansion',
    description: 'Stay in a beautifully restored historic mansion with antique furnishings and grand interiors.',
    price: 900,
    location: 'Kolkata, India',
    bedrooms: 5,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Tour Guide'],
    images: [Images[25]],
    rating: '4.7/5 (175)',
    quantity: 1
  },
  {
    id: 26,
    title: 'Countryside Villa',
    description: 'A spacious villa in the countryside, offering tranquility and beautiful views.',
    price: 450,
    location: 'Mysore, India',
    bedrooms: 4,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Nature Trails'],
    images: [Images[26]],
    rating: '4.6/5 (230)',
    quantity: 1
  },
  {
    id: 27,
    title: 'Beachfront Condo',
    description: 'A modern condo right on the beach, offering stunning ocean views and luxurious amenities.',
    price: 600,
    location: 'Goa, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Gym', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'Rooftop Access', 'Private Beach'],
    images: [Images[27]],
    rating: '4.9/5 (210)',
    quantity: 1
  },
  {
    id: 28,
    title: 'Urban Luxury Apartment',
    description: 'A luxury apartment in the heart of the city with all modern conveniences.',
    price: 650,
    location: 'Delhi, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Gym', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'Rooftop Access', 'Cable TV'],
    images: [Images[28]],
    rating: '4.7/5 (220)',
    quantity: 1
  },
  {
    id: 29,
    title: 'Secluded Beach House',
    description: 'A secluded beach house with private access to a pristine beach and luxury amenities.',
    price: 750,
    location: 'Alleppey, India',
    bedrooms: 4,
    amenities: ['WiFi', 'Air Conditioning', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Beach', 'Rooftop Access'],
    images: [Images[29]],
    rating: '4.8/5 (180)',
    quantity: 1
  },
  {
    id: 30,
    title: 'Luxury Jungle Lodge',
    description: 'A luxury lodge in the jungle, offering unique experiences and close encounters with nature.',
    price: 500,
    location: 'Jim Corbett, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Free Parking', 'Pet Friendly', 'Breakfast Included', 'Fireplace', 'Washer/Dryer', 'Kitchen', 'BBQ Grill', 'Private Yard', 'Safari Tours'],
    images: [Images[30]],
    rating: '4.9/5 (200)',
    quantity: 1
  },
  {
    id: 31,
    title: 'Modern Hilltop Villa',
    description: 'A modern villa perched on a hilltop, offering breathtaking views and luxury living.',
    price: 600,
    location: 'Lonavala, India',
    bedrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Infinity Pool', 'Hot Tub', 'Free Parking', 'Gym', 'Sauna', 'Private Chef', 'Breakfast Included', 'Rooftop Access'],
    images: [Images[11]],
    rating: '4.8/5 (210)',
    quantity: 1
  }
  
  // ... Repeat similar objects for up to 50 entries ...
];

export default properties;
