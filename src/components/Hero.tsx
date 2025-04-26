import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-cznet-orange to-cznet-red">
      {/* Banner */}
      <div className="relative w-full h-[564px]">
        <Image
          src="/images/Banner.jpg"
          alt="Família utilizando internet em casa"
          className="object-cover w-full h-full"
          fill
          priority
        />

        {/* Conteúdo sobre o banner */}
        <div className="absolute inset-0 z-10 flex flex-col items-end justify-center px-8 text-white">
          {/* Título */}
          <div className="w-full flex justify-end mb-2">
            <h1 className="text-4xl md:text-5xl font-bold">
              Planos Residenciais
            </h1>
          </div>

          {/* Subtítulo */}
          <div className="w-full flex justify-end mb-6">
            <p className="text-2xl md:text-3xl">A melhor internet para o seu lar</p>
            <p className="text-2xl md:text-3xl">para seu lar</p>
          </div>

          {/* Botão alinhado à direita */}
          <div className="w-full flex justify-end">
            <button className="bg-blue-700 text-white px-12 py-3 rounded-md font-medium hover:bg-blue-800">
              Tenho interesse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
