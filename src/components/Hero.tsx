"use client"
import React from 'react';
import { Wine, Pizza, UtensilsCrossed, ShoppingBag } from 'lucide-react';

export default function Hero() {

  return (
    <div className="pt-20">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-16">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80"
            alt="Portuguese Wine Selection" 
            className="w-full h-[600px] object-cover transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-cream p-8">
            <Wine className="h-16 w-16 mb-4" />
            <h2 className="text-3xl font-playfair mb-4">Our Wines</h2>
            <p className="text-center text-lg max-w-md font-lora">
              Discover our exclusive selection of Portuguese wines, carefully chosen to bring you the finest flavors from the Lusitanian terroir.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
          <img 
            src="../assets/1.jpg"
            alt="Portuguese Cheese Selection" 
            className="w-full h-[600px] object-cover transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-cream p-8">
            <Pizza className="h-16 w-16 mb-4" />
            <h2 className="text-3xl font-playfair mb-4">Our Cheeses</h2>
            <p className="text-center text-lg max-w-md font-lora">
              Savor the authenticity of our artisanal Portuguese cheeses, perfect for both dine-in and takeaway experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-cream py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-playfair mb-8">The wine house</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-light p-8 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <UtensilsCrossed className="h-8 w-8 text-primary-light" />
                </div>
                <h3 className="text-2xl font-playfair mb-4">Dine In</h3>
                <p className="text-cream/80 font-lora">
                  Enjoy our authentic and warm atmosphere for an unforgettable tasting experience in true Portuguese tradition.
                </p>
              </div>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="h-8 w-8 text-primary-light" />
                </div>
                <h3 className="text-2xl font-playfair mb-4">Take Away</h3>
                <p className="text-cream/80 font-lora">
                  Take a piece of Portugal home with our carefully packaged selection of wines and cheeses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}