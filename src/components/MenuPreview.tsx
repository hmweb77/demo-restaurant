"use client"
import React, { useEffect, useState } from 'react';
import { Wine, Coffee } from 'lucide-react';
import { sanityClient } from '@/sanityClient';
import { useTranslation } from 'next-i18next';
type DrinkItem = {
  name: string;
  price: string;
};

type DrinkSection = {
  category: string;
  items: DrinkItem[];
};
type FoodItem = {
  name: string;
  price: string;
};

type FoodSection = {
  category: string;
  items: FoodItem[];
};

const fetchDrinksData = async (): Promise<DrinkSection[]> => {
  const query = `*[_type == "drinks"] | order(sortOrder asc){
    category,
    sortOrder,
    items[]{
      name,
      price
    }
  }`;
  try {
    const data = await sanityClient.fetch(query) as unknown as DrinkSection[];
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array to prevent errors in the component
  }
};
const fetchFoodsData = async (): Promise<FoodSection[]> => {
  const query = `*[_type == "food"] | order(sortOrder asc){
    category,
    sortOrder,
    items[]{
      name,
      price
    }
  }`;
  try {
    const data = await sanityClient.fetch(query) as unknown as DrinkSection[];
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array to prevent errors in the component
  }
};


const MenuPreview = () => {
  const [drinks, setDrinks] = useState<DrinkSection[]>([]);
  const [foods, setFoods] = useState<FoodSection[]>([]);

  useEffect(() => {
    fetchDrinksData().then((data) => setDrinks(data));
  }, []);

  useEffect(() => {
    fetchFoodsData().then((data) => setFoods(data));
  }, []);
 
  const { t } = useTranslation('common');

  return (
    <div className="py-16 bg-[#F5E6D3]" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t('Our Menu')}</h2>
        <p className="section-subtitle">{t('portugueselfav')} </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/10">
            <div className="flex items-center justify-center mb-6">
              <Wine className="h-6 w-6  text-primary mr-2" />
              <h3 className="text-2xl  font-playfair text-primary-dark">{t('Drinks')}</h3>
            </div>
            <div className="space-y-8 ">
              {drinks.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg flex justify-center font-playfair mb-3 text-primary-dark">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex text-primary-dark/90 justify-center font-lora">
                        <span className="text-primary-dark/90">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/10">
            <div className="flex items-center justify-center mb-6">
              <Coffee className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-playfair text-primary-dark">{t('Food')}</h3>
            </div>
            <div className="space-y-8">
              {foods.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-playfair flex justify-center mb-3 text-primary-dark">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-center  font-lora">
                        <span className="text-primary-dark/90">{item.name}</span>

                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;

