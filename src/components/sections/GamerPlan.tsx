import React from 'react';

const GamerPlan = () => {
  return (
    <section id="plano-gamer" className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos triangulares dourados */}
      <div className="absolute left-0 top-20 w-32 h-32 border-2 border-[#FFD700] transform rotate-45"></div>
      <div className="absolute right-20 bottom-10 w-40 h-40 border-2 border-[#FFD700] transform -rotate-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">PLANO GAMER</h2>
          
          <p className="text-lg mb-10 text-center">
            Para quem leva o jogo a sério: baixa latência, conexão estável e velocidade. 
            Com a CZnet, suas partidas online ficam muito mais fluidas e competitivas. 
            Menos lag, mais vitórias.
          </p>
          
          <div className="text-center mb-10">
            <p className="text-lg mb-2">Planos com até</p>
            <h3 className="text-6xl font-bold text-[#E53935] mb-6">
              1000
              <span className="text-2xl ml-2">MEGA</span>
            </h3>
            
            <button className="bg-[#E53935] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#c62828] transition-colors">
              Contrate agora!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamerPlan;
