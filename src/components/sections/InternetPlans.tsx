import React from 'react';
import PlanCard from '../ui/PlanCard';

const InternetPlans = () => {
  // Elementos decorativos triangulares dourados
  const Triangle = ({ className }: { className: string }) => (
    <div className={`absolute border-2 border-[#FFD700] w-24 h-24 transform ${className}`}></div>
  );

  return (
    <section id="planos" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      {/* Elementos decorativos */}
      <Triangle className="left-10 top-20 rotate-45" />
      <Triangle className="right-20 top-10 -rotate-12" />
      <Triangle className="right-40 bottom-20 rotate-30" />
      <Triangle className="left-20 bottom-40 -rotate-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl font-bold mb-2">ASSINE OS MELHORES</h2>
          <h3 className="text-white text-5xl font-bold mb-6">Planos</h3>
          <div className="inline-block bg-[#E53935] text-white px-8 py-2 rounded-full text-lg font-medium">
            DE FIBRA ÓPTICA
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <PlanCard 
            speed="400" 
            price={99.90} 
            benefits={[
              "TV BOX",
              "1 Roteador em comodato",
              "+TVPLAY",
              "Livro / Biblioteca digital"
            ]}
          />
          
          <PlanCard 
            speed="700" 
            price={129.90} 
            benefits={[
              "TV BOX",
              "1 Roteador em comodato",
              "+TVPLAY",
              "Livro / Biblioteca digital"
            ]}
            isPopular={true}
          />
          
          <PlanCard 
            speed="600" 
            price={119.90} 
            benefits={[
              "TV BOX",
              "1 Roteador em comodato",
              "+TVPLAY",
              "Livro / Biblioteca digital"
            ]}
          />
          
          <PlanCard 
            speed="500" 
            price={104.90} 
            benefits={[
              "TV BOX",
              "1 Roteador em comodato",
              "+TVPLAY",
              "Livro / Biblioteca digital"
            ]}
          />
        </div>
      </div>
      
      {/* Botão WhatsApp (fixo, já implementado no Hero) */}
    </section>
  );
};

export default InternetPlans;
