import React from 'react';

type PlanCardProps = {
  speed: string;
  price: number;
  benefits: string[];
  isPopular?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ speed, price, benefits, isPopular = false }) => {
  return (
    <div className={`bg-[#222222] border-2 ${isPopular ? 'border-[#FFD700]' : 'border-[#E53935]'} rounded-lg overflow-hidden w-full max-w-xs`}>
      {/* Cabeçalho */}
      <div className="bg-[#E53935] py-4 px-6 text-center">
        <h3 className="text-2xl font-bold text-white">{speed} MEGA</h3>
      </div>
      
      {/* Benefícios */}
      <div className="p-6">
        <ul className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-white text-center">{benefit}</li>
          ))}
        </ul>
        
        {/* Preço */}
        <div className="text-center mb-8">
          <p className="text-white text-sm mb-1">Mensal</p>
          <div className="flex items-start justify-center">
            <span className="text-white text-lg mt-1">R$</span>
            <span className="text-white text-5xl font-bold mx-1">{Math.floor(price)}</span>
            <span className="text-white text-2xl mt-1">,{(price % 1 * 100).toFixed(0)}</span>
          </div>
        </div>
        
        {/* Botão */}
        <button className="w-full py-2 px-4 bg-transparent border border-[#E53935] text-[#E53935] rounded-full hover:bg-[#E53935] hover:text-white transition-colors">
          Contratar
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
