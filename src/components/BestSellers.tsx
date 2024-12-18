"use client"
import React from 'react';
import { Wine, UtensilsCrossed, Grape } from 'lucide-react';
import { useTranslation } from 'next-i18next';

export default function BestSellers() {
  const { t } = useTranslation('common');
const cheeseBoards = [
  {
    title: `${t("Tábua Regional")}`,
    items: [
      `${t("Goat Cheese 'Planície Branca'")}`,
      `${t( "Queijo São Jorge DOP 24 Meses")}`,
      `${t("Queijo de Ovelha Curado MalpiQueijo Kg")}`,

    ],
    description: `${t("A journey through Portugal's finest cheese regions")}`,
    image: "../assets/2.jpg"
  },
  {
    title: `${t("Tábua do Chef")}`,
    items: [
      `${t("Iberico Ham ( Pata Negra )")}`,
      `${t("Copa Porco Preto")}`,
      `${t("Lombo Porco Preto")}`,
    ],
    description: `${t("Premium selection of traditional Portuguese charcuterie")}`,
    image: "../assets/3.png"
  }
];








const beverages = {
  wines: {
    title: `${t("Vinhos")}`,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80",
    selections: [
      {
        name: "Douro Valley Red",
        items: [
          "São Luiz reserva",
          "Xisto Ilimitado",
          "Quinta da Gaivota"
        ]
      },
      {
        name: "Alentejo Red Wines",
        items: [
          "Mouchão 2016",
          "Herdade dos Perdigões Vinhas Velhas",
          "Vicentino Pinot Noir"
        ]
      }
    ]
  },
  spirits: {
    title: `${t("Aguardentes & Licores")}`,
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80",
    selections: [
      {
        name: "Aguardentes",
        items: [
          "Aguardente Medronho Sulista",
          "Monte dos Perdigões 10 anos",
          "Aguardente Vínica Marquês de Borba"
        ]
      },
      {
        name: "Licores Tradicionais",
        items: [
          "Moscatel Setúbal Reserva 5 anos",
          "Ginjinha Mariquinhas",
          "Porto Messias LBV 2017"
        ]
      }
    ]
  }
};


  return (
    <div className="py-16 bg-[#F5E6D3] bg-texture" id="bestsellers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Our Selection')}</h2>
          <p className="section-subtitle">
          {t('Carefully curated selections from the best regions of Portugal.')}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-playfair mb-8 flex items-center justify-center text-primary-dark">
            <UtensilsCrossed className="h-6 w-6 mr-2 text-primary" />
            <span>{t('Cheese and Charcuterie Boards')}</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {cheeseBoards.map((board, index) => (
              <div key={index} className="bg-[#FDF8F3] rounded-xl shadow-lg overflow-hidden border border-primary/10">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-playfair mb-4 text-primary-dark">{board.title}</h4>
                  <ul className="space-y-2 mb-4 font-lora text-primary-dark/80">
                    {board.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary/60 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-primary-dark/60 italic font-lora">{board.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mb-10 ">
          <img
            src="../assets/44.png"
            alt="meat and cheese"
            className="w-[700px] aspect-video object-center rounded-3xl object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-playfair mb-8 flex items-center justify-center text-primary-dark">
            <Wine className="h-6 w-6 mr-2 text-primary" />
            <span>{t('Bebidas Selecionadas')}</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(beverages).map((category, index) => (
              <div key={index} className="bg-[#FDF8F3] rounded-xl shadow-lg overflow-hidden border border-primary/10">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-playfair mb-6 text-primary-dark">{category.title}</h4>
                  <div className="space-y-6">
                    {category.selections.map((section, i) => (
                      <div key={i} className="border-b border-primary/10 last:border-0 pb-4 last:pb-0">
                        <h5 className="font-playfair text-lg text-primary-dark mb-3">{section.name}</h5>
                        <ul className="space-y-2 font-lora text-primary-dark/80">
                          {section.items.map((item, j) => (
                            <li key={j} className="flex items-center">
                              <Grape className="h-4 w-4 mr-2 text-primary/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}