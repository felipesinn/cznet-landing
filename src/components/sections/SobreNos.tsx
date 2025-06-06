import React from 'react';

const SobreNos: React.FC = () => {
  return (
    <section id="sobre-nos" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="heading-lg text-cznet-dark mb-4">Sobre Nós</h2>
            <p className="text-cznet-gray mb-6">
              A CZnet é uma empresa de telecomunicações comprometida em oferecer serviços de internet de alta qualidade 
              através de tecnologia de fibra óptica. Nosso objetivo é proporcionar a melhor experiência de conexão para 
              nossos clientes, com planos personalizados que atendem às necessidades específicas de cada um.
            </p>
            <p className="text-cznet-gray mb-6">
              Fundada com a missão de democratizar o acesso à internet de alta velocidade, a CZnet investe constantemente 
              em infraestrutura e tecnologia para garantir uma conexão estável e de alta performance.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cznet-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cznet-red mb-2">5+</div>
                <div className="text-cznet-dark">Anos de experiência</div>
              </div>
              <div className="bg-cznet-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cznet-red mb-2">10k+</div>
                <div className="text-cznet-dark">Clientes satisfeitos</div>
              </div>
              <div className="bg-cznet-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cznet-red mb-2">100%</div>
                <div className="text-cznet-dark">Fibra óptica</div>
              </div>
              <div className="bg-cznet-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cznet-red mb-2">24/7</div>
                <div className="text-cznet-dark">Suporte técnico</div>
              </div>
            </div>
            
            <a href="#" className="btn btn-primary rounded-full">Saiba mais</a>
          </div>
          
          <div className="flex justify-center">
            {/* LINHA MODIFICADA: Comentada a tag <img> para Banner2.jpg */}
            {/* <img 
              src="/images/Banner2.jpg" 
              alt="Equipe CZnet" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            /> */}
            {/* Placeholder para manter o espaço */}
            <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
              Banner Sobre Nós Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;