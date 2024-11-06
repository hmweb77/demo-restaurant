"use client"
import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="/momentos-lisboa-logo.png" 
        alt="Momentos Lisboa - Vinho, Queijo, Presunto, Petiscos" 
        className="h-20 w-auto rounded-full bg-white/90 p-1"
      />
    </div>
  );
}