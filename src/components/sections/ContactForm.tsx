import React from 'react';

const ContactForm = () => {
  return (
    <section id="contato" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto à esquerda */}
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h3 className="text-lg font-semibold text-[#E53935] mb-2">EM CASA OU NO SEU NEGÓCIO</h3>
            <h2 className="text-3xl font-bold mb-6">Conectividade completa com fibra óptica, telefone fixo e TV Box</h2>
            <p className="text-gray-700 mb-6">
              Unimos velocidade, estabilidade e inovação para oferecer soluções completas em internet, 
              telefonia e entretenimento. Esteja sempre conectado com o que há de melhor!
            </p>
            
            {/* Elemento decorativo */}
            <div className="hidden md:block">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L120 120M0 120L120 0" stroke="#FFD700" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          {/* Formulário à direita */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Entre em contato</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  placeholder="Ex: Paulo da Costa"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                  <select
                    id="state"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  >
                    <option value="">Selecione</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="PR">Paraná</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                  <select
                    id="city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  >
                    <option value="">Selecione</option>
                    <option value="planalto">Planalto</option>
                    <option value="seberi">Seberi</option>
                    <option value="frederico">Frederico Westphalen</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  placeholder="Ex: exemplo@gmail.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  placeholder="Ex: contratar plano"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#E53935] text-white py-3 px-6 rounded-md hover:bg-[#c62828] transition-colors font-medium"
              >
                Enviar
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Ao clicar em enviar você concorda em receber nossa informações pelo o CZnet
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
