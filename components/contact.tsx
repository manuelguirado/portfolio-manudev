import React, { useState } from 'react';
import { useScrollReveal } from '../src/hooks/useScrollReveal';
import { sendEmail } from '../utils/sendEmail';



export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await sendEmail(formData.name, formData.email, formData.message);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error al enviar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center justify-center min-h-screen section-padding fade-in-right ${isVisible ? 'visible' : ''}`}
      id="contact"
    >
      {/* Título principal arriba */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center px-4">Contacto</h1>
      
      {/* Contenedor con el mismo ancho que las otras secciones */}
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="form-container bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border border-gray-600">
            {/* Campo Nombre */}
            <div className="mb-4 md:mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full py-2 md:py-3 px-3 md:px-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-600 transition-all duration-200 text-sm md:text-base"
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo Email */}
            <div className="mb-4 md:mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full py-2 md:py-3 px-3 md:px-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-600 transition-all duration-200 text-sm md:text-base"
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo Mensaje */}
            <div className="mb-4 md:mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="w-full py-2 md:py-3 px-3 md:px-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-600 transition-all duration-200 resize-none text-sm md:text-base"
                id="message"
                name="message"
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botón de envío */}
            <div className="flex flex-col items-center">
              <button
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:transform hover:scale-105'
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {/* Mensajes de estado */}
              {status === 'success' && (
                <p className="mt-4 text-green-400 text-center">
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-400 text-center">
                  Error al enviar el mensaje. Inténtalo de nuevo.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}