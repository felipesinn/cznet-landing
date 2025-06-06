import React from 'react';
import { Download, Film, Gamepad2, Briefcase } from 'lucide-react';

const InternetBenefits = () => {
  const benefits = [
    {
      icon: <Download className="w-6 h-6" />,
      text: "Baixe e envie arquivos"
    },
    {
      icon: <Film className="w-6 h-6" />,
      text: "Filmes e streamings"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      text: "Jogue online"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      text: "Trabalhe e estude"
    }
  ];

  return (
    <section id="internet-benefits" className="py-16 bg-gradient-to-r from-[#E53935] to-[#c62828] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Internet <span className="font-extrabold">fibra óptica</span> para 
            todos as suas <span className="font-extrabold">necessidades!</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-3">
                  {benefit.icon}
                </div>
                <p className="text-sm font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
          
          <button className="bg-white text-[#E53935] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            Contrate agora!
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternetBenefits;
