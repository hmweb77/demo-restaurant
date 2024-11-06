"use client"
import React from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';



export default function Contact() {

  return (
    <div className="bg-stone-900 text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Meet Orlando</h2>
          <div className="flex flex-col items-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-amber-500">
              <img 
                src="../assets/5.jpg"
                alt="Orlando"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Passionate about Portuguese wines and cheeses for over 20 years, Orlando is always here to guide you and share his love for Portuguese gastronomy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-stone-800 p-8 rounded-xl">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                <a href="https://maps.app.goo.gl/so3SqyhK82G2YZzG7"><p className="text-gray-300 underline">Rua da Boavista 166, 1200-177 Lisboa</p></a>  
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <Phone className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+351 925954916</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <Mail className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">momentos.lisb@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <Clock className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Saturday: 11 AM–9 PM<br /> 
                    Closed on Sunday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 p-8 rounded-xl">
            <h3 className="text-2xl font-serif mb-6">Ask Orlando</h3>
            <form action="https://formsubmit.co/your@oussamahamdani1@gmail.com" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                name="name"
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                name="email"
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                  I`&apos;`m interested in
                </label>
                <select
                name="interest"
                  id="interest"
                  className="w-full px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                >
                  <option value="">Select your interest</option>
                  <option value="wine">Wine Recommendations</option>
                  <option value="cheese">Cheese Selection</option>
                  <option value="pairing">Wine & Cheese Pairing</option>
                  <option value="events">Private Events</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  placeholder="Tell us what you're looking for..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}