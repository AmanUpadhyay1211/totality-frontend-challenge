"use client"
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/router';
import { useSelector } from 'react-redux';
import properties from '@/api/properties';

function PropertyPage() {
  const { id } = useParams();
  const property = properties.filter(item => item.id === id);

  return (
    <div className='min-h-screen min-w-full'>
      <div className='flex justify-center items-center h-screen'>
        <Image src={property.images[0]} height={100} width={100} alt='thumbnail' />
      </div>
      {property.title}
      {property.description}
      {property.ratings}
      {property.amenities}
      {property.price}
      {property.location}
      {property.bedroom}
    </div>
  )
}

export default PropertyPage