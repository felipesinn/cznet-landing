import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Produtos */}
          <div>
            <h3 className="text-[#E53935] font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#internet" className="text-gray-600 hover:text-[#E53935]">Internet</a></li>
              <li><a href="#telefonia" className="text-gray-600 hover:text-[#E53935]">Telefonia</a></li>
              <li><a href="#tvbox" className="text-gray-600 hover:text-[#E53935]">TV Box</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#E53935]">Biblioteca CZnet</a></li>
            </ul>
          </div>
          
          {/* CZnet */}
          <div>
            <h3 className="text-[#E53935] font-bold text-lg mb-4">CZnet</h3>
            <ul className="space-y-2">
              <li><a href="#sobre-nos" className="text-gray-600 hover:text-[#E53935]">Sobre nós</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#E53935]">Trabalhe conosco</a></li>
              <li><a href="#area-atuacao" className="text-gray-600 hover:text-[#E53935]">Área de atuação</a></li>
            </ul>
          </div>
          
          {/* Pagamentos */}
          <div>
            <h3 className="text-[#E53935] font-bold text-lg mb-4">Pagamentos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#E53935]">Área PIX</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#E53935]">Portal Pagamentos</a></li>
            </ul>
          </div>
          
          {/* Atendimento */}
          <div>
            <h3 className="text-[#E53935] font-bold text-lg mb-4">Atendimento</h3>
            <div className="flex items-center mb-3">
              <Phone size={18} className="text-[#E53935] mr-2" />
              <span className="text-gray-600">Suporte: 0800 644 1777</span>
            </div>
            <button className="flex items-center px-4 py-2 border border-[#E53935] text-[#E53935] rounded-full text-sm hover:bg-[#E53935] hover:text-white transition-colors">
              <MapPin size={16} className="mr-2" />
              <span>Localização</span>
            </button>
          </div>
        </div>
        
        {/* Logo e informações da empresa */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="mb-6 md:mb-0">
            {/* LINHA MODIFICADA: Comentada a tag <img> que carregava o logo */}
            {/* <img src="/images/logo.png" alt="CZnet" className="h-10 mb-4" /> */}
            {/* Você pode colocar um texto temporário aqui */}
            <span className="text-lg font-bold text-[#E53935]">CZnet Footer Logo (placeholder)</span>
            <p className="text-sm text-gray-500 mt-2">
              A mais de 20 anos grande conexão com alta tecnologia
            </p>
            <p className="text-sm text-gray-500">
              CZNET PROVEDOR DE INTERNET LTDA | CNPJ: 00.000.000/0001-00
            </p>
          </div>
          
          {/* Redes sociais */}
          <div className="flex space-x-4">
            <a href="#" className="bg-[#E53935] text-white p-2 rounded-full hover:bg-[#c62828] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-[#E53935] text-white p-2 rounded-full hover:bg-[#c62828] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-[#E53935] text-white p-2 rounded-full hover:bg-[#c62828] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-[#E53935] text-white p-2 rounded-full hover:bg-[#c62828] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Créditos */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Design por: <a href="#" className="text-[#E53935]">FELIPE SINN</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;