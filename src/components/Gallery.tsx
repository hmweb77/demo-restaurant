"use client"
import React from 'react';
import { Store } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: "../photo_2024-11-06_20-25-51.jpg",
      title: "Wine Cellar",
      description: "Our traditional stone cellar houses hundreds of Portuguese wines",
      className: "md:col-span-2 aspect-video"
    },
    {
      url: "../photo_2024-11-06_20-25-47.jpg",
      title: "Rustic Corner",
      description: "Cozy spots for intimate tastings",
      className: "aspect-[3/4]"
    },
    {
      url: "../photo_2024-11-06_20-25-45.jpg",
      title: "Traditional Bar",
      description: "Where stories and Porto wine flow freely",
      className: "aspect-square"
    }
  ];

  return (
    <div className="py-16 bg-[#F5E6D3] bg-texture">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title flex items-center justify-center gap-3">
            <Store className="h-8 w-8 text-primary" />
            <span>Experience Momentos</span>
          </h2>
          <p className="section-subtitle">
            A rustic haven of Portuguese gastronomy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl shadow-lg ${image.className}`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-playfair text-cream mb-2">
                  {image.title}
                </h3>
                <p className="text-cream/90 font-lora text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;