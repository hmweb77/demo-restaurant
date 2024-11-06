
"use client"
import '../globals.css'

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import BestSellers from "@/components/BestSellers";
import Separator from "@/components/Separator";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
    return (
   
<div className="min-h-screen bg-[#F5E6D3] bg-texture">
         <Navbar />
   <Hero />
              <BestSellers />
              <MenuPreview />
              <Separator />
              <Gallery />
              <Separator />
              <Reviews />
              <Contact />
              <footer className="bg-stone-900 py-6 text-stone-300 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Momentos Wine & Cheese. All rights reserved.</p>
              </footer>
              </div> 
           );
        }
             