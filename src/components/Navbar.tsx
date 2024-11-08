"use client"
import React, { useState } from 'react';
import { Menu, Wine, X } from 'lucide-react';


// components/Navbar.js
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

  


    // <nav>
   
    //   <button onClick={toggleLanguage}>
    //     {t('translate')}
    //   </button>
    // </nav>




export default function Navbar() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'pt' : 'en';
    router.push(router.pathname, router.asPath, { locale: nextLocale });
  };
  return (
    <nav className="bg-[#DACEC1] text-[#2C1810] py-4 px-6 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <div className="flex w-40 gap-4">
              <img src="../Logo Setembro 2024.png" alt="logo" />
            </div>      
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-lora">
          <a href="#" className="hover:text-[#CD8D7A] transition-colors">Home</a>
          <a href="#bestsellers" className="hover:text-[#CD8D7A] transition-colors">Best Sellers</a>
          <a href="#menu" className="hover:text-[#CD8D7A] transition-colors">Menu</a>
          <a href="#reviews" className="hover:text-[#CD8D7A] transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-[#CD8D7A] transition-colors">Contact</a>
        <button className='border border-black px-2 rounded-xl' onClick={toggleLanguage}>
        {t('translate')}
     </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#CD8D7A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#2C1810] border-t border-[#3D261C] py-4">
          <div className="flex flex-col space-y-4 px-6 font-lora">
            <a 
              href="#" 
              className="text-[#FBF7F4] hover:text-[#CD8D7A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#bestsellers" 
              className="text-[#FBF7F4] hover:text-[#CD8D7A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Best Sellers
            </a>
            <a 
              href="#menu" 
              className="text-[#FBF7F4] hover:text-[#CD8D7A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#reviews" 
              className="text-[#FBF7F4] hover:text-[#CD8D7A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-[#FBF7F4] hover:text-[#CD8D7A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}