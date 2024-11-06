"use client"
import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      author: "Mary L.",
      rating: 5,
      text: "A true piece of Portugal in the heart of the city! Orlando introduced us to exceptional wines. An authentic experience!"
    },
    {
      author: "Peter D.",
      rating: 5,
      text: "The cheeses are divine and the atmosphere is welcoming. The owner is passionate and his advice is invaluable."
    },
    {
      author: "Sophie M.",
      rating: 5,
      text: "The perfect place to discover Portuguese gastronomy. The tastings are generous and the prices are reasonable."
    }
  ];

  return (
    <div className="bg-secondary py-16" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-playfair text-center mb-12 text-cream">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary-light p-6 rounded-xl border border-primary-light/20">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary-light text-primary-light" />
                ))}
              </div>
              <p className="text-cream/80 mb-4 italic font-lora">&quot;{review.text}&quot;</p>
              <p className="text-cream font-semibold font-playfair">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}