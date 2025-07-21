'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formHeight, setFormHeight] = useState<number | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    if (!formSuccess && formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, [formSuccess, error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log('Form submission started');
      
      setIsSubmitting(true);
      setError('');
      
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      console.log('Form data extracted');
      
      // Extract form data and map to API expected format
      const name = formData.get('name')?.toString() || '';
      const nameParts = name.split(' ');
      
      const data = {
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || nameParts[0] || '', // Use first name as last name if only one name provided
        email: formData.get('email')?.toString() || '',
        phone: formData.get('telephone')?.toString() || '',
        date: new Date().toISOString().split('T')[0], // Today's date as placeholder
        time: '12:00', // Default time as placeholder
        guests: '1', // Default guests as placeholder
        specialRequests: `Entreprise: ${formData.get('enterprise')} | Message: ${formData.get('message')}`
      };

      console.log('Submitting form data:', data);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response received:', response.status);
      
      const result = await response.json();
      console.log('API response:', result);

      if (response.ok) {
        console.log('Form submitted successfully');
        form.reset();
        setFormSuccess(true);
        setTimeout(() => setFormSuccess(false), 5000);
      } else {
        console.error('API error:', result);
        setError(result.error || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError(`Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsSubmitting(false);
    }
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
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=25+Avenue+Montaigne+75008+Paris+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gold transition"
                  >
                    25 Avenue Montaigne<br />75008 Paris, France
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-phone-alt text-gold text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-medium text-darkgreen">Téléphone</h4>
                  <a
                    href="tel:+14385213151"
                    className="text-gray-600 hover:text-gold transition"
                  >
                    +1 438-521-3151
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-envelope text-gold text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-medium text-darkgreen">Email</h4>
                  <a
                    href="mailto:info@cabinetcm360.com"
                    className="text-gray-600 hover:text-gold transition"
                  >
                    info@cabinetcm360.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg fade-in">
            <div className="relative" style={{ minHeight: formHeight ? `${formHeight}px` : undefined }}>
              <AnimatePresence mode="wait">
                {!formSuccess ? (
                  <motion.form
                    key="form"
                    ref={formRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
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
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-darkgreen hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="feedback"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col justify-center items-center"
                    style={{ height: formHeight ? `${formHeight}px` : undefined }}
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <div className="flex items-center justify-center mb-6">
                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/90 shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-darkgreen font-serif mb-2 text-center">Merci pour votre message !</h2>
                      <p className="text-lg text-gray-700 text-center mb-2 max-w-md">Nous avons bien reçu votre demande et vous contacterons rapidement.<br/>Passez une excellente journée !</p>
                      <button
                        type="button"
                        onClick={() => setFormSuccess(false)}
                        className="mt-6 px-6 py-2 rounded-lg bg-darkgreen text-white font-semibold shadow hover:bg-gold hover:text-darkgreen transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
                        aria-label="Envoyer un autre message"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 p-5 bg-white border-l-4 border-red-400 rounded-lg shadow text-red-700 font-serif text-lg flex items-center gap-3"
                >
                  <svg className="w-7 h-7 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  <span>{error}</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 