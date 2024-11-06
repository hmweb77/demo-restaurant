"use client"
import React from 'react';
import { Grape } from 'lucide-react';

const Separator = () => {
  return (
    <div className="py-12 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-amber-500/20"></div>
          <div className="flex items-center space-x-4 px-6">
            <Grape className="h-6 w-6 text-amber-500 rotate-[-30deg]" />
            <Grape className="h-8 w-8 text-amber-500" />
            <Grape className="h-6 w-6 text-amber-500 rotate-[30deg]" />
          </div>
          <div className="flex-grow h-px bg-amber-500/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Separator;