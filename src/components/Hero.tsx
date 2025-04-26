import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Número de banners

  // Simulando a troca de slides a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-cznet-orange to-cznet-red">
      {/* Banner */}
      <div className="relative w-full h-[564px] overflow-hidden">
        <Image
          src="/images/Banner2.jpg"
          alt="Família utilizando internet em casa"
          className="object-cover w-full h-full"
          fill
          priority
        />

        {/* Conteúdo sobre o banner */}
        <div className="absolute inset-0 z-40 flex items-center text-white px-4">
          {/* Div para empurrar o conteúdo mais pra direita */}
          <div className="ml-auto mr-20 max-w-md flex flex-col items-start">
            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Planos Residenciais
            </h1>

            {/* Subtítulo */}
            <p className="text-2xl md:text-3xl mb-6">
              A melhor internet para o seu lar
            </p>

            {/* Botão */}
            <button className="bg-[#0047AB] hover:bg-[#E74423] text-white font-semibold px-8 py-4 rounded-md transition">
              Tenho interesse
            </button>
          </div>
        </div>

        {/* Indicador do Carrossel */}
        <div className="absolute bottom-8 right-32 sm:right-8 md:right-224 z-20">
          <div className="flex items-center gap-2 bg-[#E62F15] rounded-full px-6 py-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                  index === currentSlide
                    ? 'bg-white w-8 sm:w-6 md:w-5'  // Quando o slide for o atual, aumenta a largura e mantém a altura pequena
                    : 'bg-[#f76954] w-3 sm:w-2 md:w-3'  // Os outros continuam com largura 3
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
