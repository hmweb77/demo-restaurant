"use client"
import React, { useEffect, useState } from 'react';
import { Wine, Coffee } from 'lucide-react';
import { sanityClient } from '@/sanityClient';


type DrinkItem = {
  name: string;
  price: string;
};

type DrinkSection = {
  category: string;
  items: DrinkItem[];
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
    console.log("query:", query);
    const data = await sanityClient.fetch(query) as unknown as DrinkSection[];
    console.log("data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array to prevent errors in the component
  }
};


const MenuPreview = () => {
  const [drinks, setDrinks] = useState<DrinkSection[]>([]);

  useEffect(() => {
    fetchDrinksData().then((data) => setDrinks(data));
  }, []);
 
 // const drinks = [
  //   {
  //     category: "Red Wines",
  //     items: [
  //       { name: "Douro DOC Reserva", price: "Glass €8 | Bottle €36" },
  //       { name: "Alentejo Regional", price: "Glass €7 | Bottle €32" },
  //       { name: "Dão Selection", price: "Glass €9 | Bottle €42" },
  //       { name: "Porto Vintage", price: "Glass €10" }
  //     ]
  //   },
  //   {
  //     category: "White Wines",
  //     items: [
  //       { name: "Vinho Verde", price: "Glass €7 | Bottle €30" },
  //       { name: "Alvarinho Reserve", price: "Glass €8 | Bottle €36" },
  //       { name: "Beira Interior DOC", price: "Glass €7 | Bottle €32" },
  //       { name: "Bucelas DOC", price: "Glass €8 | Bottle €34" }
  //     ]
  //   },
  //   {
  //     category: "Spirits",
  //     items: [
  //       { name: "Aguardente Vínica", price: "50ml €9" },
  //       { name: "Medronho Traditional", price: "50ml €8" },
  //       { name: "Ginjinha Artisanal", price: "50ml €7" },
  //       { name: "Licor Beirão", price: "50ml €7" }
  //     ]
  //   }
  // ];

  const food = [
    {
      category: "Cheese Selection",
      items: [
        { name: "Serra da Estrela DOP", price: "50g €9" },
        { name: "Azeitão DOP", price: "50g €8" },
        { name: "São Jorge DOP", price: "50g €8" },
        { name: "Nisa DOP", price: "50g €7" }
      ]
    },
    {
      category: "Charcuterie",
      items: [
        { name: "Presunto Alentejano DOP", price: "50g €10" },
        { name: "Paio do Alentejo", price: "50g €8" },
        { name: "Chouriço Traditional", price: "50g €7" },
        { name: "Morcela da Beira", price: "50g €7" }
      ]
    },
    {
      category: "Petiscos",
      items: [
        { name: "Pão Regional", price: "€3" },
        { name: "Azeitonas Marinadas", price: "€4" },
        { name: "Tremoços", price: "€3" },
        { name: "Amendoins com Alho", price: "€3" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-[#F5E6D3]" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Traditional Portuguese flavors with a modern twist</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/10">
            <div className="flex items-center justify-center mb-6">
              <Wine className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-playfair text-primary-dark">Drinks</h3>
            </div>
            <div className="space-y-8">
              {drinks.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-playfair mb-3 text-primary-dark">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-baseline font-lora">
                        <span className="text-primary-dark/90">{item.name}</span>
                        <span className="text-primary ml-4 text-sm tabular-nums">{item.price}</span>
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
              <h3 className="text-2xl font-playfair text-primary-dark">Food</h3>
            </div>
            <div className="space-y-8">
              {food.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-playfair mb-3 text-primary-dark">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-baseline font-lora">
                        <span className="text-primary-dark/90">{item.name}</span>
                        <span className="text-primary ml-4 text-sm tabular-nums">{item.price}</span>
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


 // const drinks = [
  //   {
  //     category: "Red Wines",
  //     items: [
  //       { name: "Douro DOC Reserva", price: "Glass €8 | Bottle €36" },
  //       { name: "Alentejo Regional", price: "Glass €7 | Bottle €32" },
  //       { name: "Dão Selection", price: "Glass €9 | Bottle €42" },
  //       { name: "Porto Vintage", price: "Glass €10" }
  //     ]
  //   },
  //   {
  //     category: "White Wines",
  //     items: [
  //       { name: "Vinho Verde", price: "Glass €7 | Bottle €30" },
  //       { name: "Alvarinho Reserve", price: "Glass €8 | Bottle €36" },
  //       { name: "Beira Interior DOC", price: "Glass €7 | Bottle €32" },
  //       { name: "Bucelas DOC", price: "Glass €8 | Bottle €34" }
  //     ]
  //   },
  //   {
  //     category: "Spirits",
  //     items: [
  //       { name: "Aguardente Vínica", price: "50ml €9" },
  //       { name: "Medronho Traditional", price: "50ml €8" },
  //       { name: "Ginjinha Artisanal", price: "50ml €7" },
  //       { name: "Licor Beirão", price: "50ml €7" }
  //     ]
  //   }
  // ];