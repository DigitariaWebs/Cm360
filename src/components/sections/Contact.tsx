'use client';

import { useState } from 'react';

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      const form = e.target as HTMLFormElement;
      form.reset();
      setFormSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 pb-4">Contactez-nous</h2>
            <p className="text-gray-600 mb-5 ">
              Nos experts sont à votre disposition pour discuter de vos besoins en gestion de trésorerie et vous proposer des solutions sur mesure.
            </p>
            <div className="gold-border mb-8"></div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt text-gold text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-medium text-darkgreen">Adresse</h4>
                  <p className="text-gray-600">25 Avenue Montaigne<br />75008 Paris, France</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-phone-alt text-gold text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-medium text-darkgreen">Téléphone</h4>
                  <p className="text-gray-600">+1 438-521-3151</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-envelope text-gold text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-medium text-darkgreen">Email</h4>
                  <p className="text-gray-600">info@cabinetcm360.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom complet"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#1A3A2F] focus:border-[#1A3A2F] focus:outline-none p-3 border"
                />
              </div>
              <div>
                <label htmlFor="enterprise" className="block text-sm font-medium text-gray-700">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="enterprise"
                  name="enterprise"
                  required
                  placeholder="Nom de l'entreprise"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#1A3A2F] focus:border-[#1A3A2F] focus:outline-none p-3 border"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  placeholder="Votre numéro de téléphone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#1A3A2F] focus:border-[#1A3A2F] focus:outline-none p-3 border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Votre adresse email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#1A3A2F] focus:border-[#1A3A2F] focus:outline-none p-3 border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Votre message"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#1A3A2F] focus:border-[#1A3A2F] focus:outline-none p-3 border"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-darkgreen hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition duration-300"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
            {formSuccess && (
              <div className="mt-4 p-4 bg-green-50 text-green-800 rounded">
                Votre message a bien été envoyé. Nous vous contacterons rapidement.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 