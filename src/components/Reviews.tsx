"use client"
import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'next-i18next';

export default function Reviews() {
  const { t } = useTranslation('common');
  const reviews = [
    {
      author: "Mary L.",
      rating: 5,
      text: `${t("A true piece of Portugal in the heart of the city! Orlando introduced us to exceptional wines. An authentic experience!")}`
    },
    {
      author: "Peter D.",
      rating: 5,
      text: `${t("The cheeses are divine, and the atmosphere is welcoming. The owner is passionate, and his advice is invaluable.")}`
    },
    {
      author: "Sophie M.",
      rating: 5,
      text: `${t("The perfect place to discover Portuguese gastronomy. The tastings are generous, and the prices are reasonable.")}`
    }
  ];

  return (
    <div className="bg-secondary py-16" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-playfair text-center mb-12 text-cream">{t('Customer Reviews')}</h2>
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
      <div className='grid mt-20 items-center justify-center'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.3815753260005!2d-9.152931423936923!3d38.70904757176491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19359c72318e13%3A0x9b9107d00a0cf211!2sMomentos%20Wine%20%26%20Cheese!5e0!3m2!1sen!2spt!4v1730931938778!5m2!1sen!2spt"
            className="w-full sm:w-[400px] md:w-[600px] lg:w-[900px] h-[300px] md:h-[450px] lg:h-[450px]"
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>
  );
}