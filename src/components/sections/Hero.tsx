import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

// Definindo interface para as props do TypeWriter
interface TypeWriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

// Componente de efeito de digitação com tipagem correta
const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  delay = 80, 
  onComplete = () => {} 
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, delay, text, isComplete, onComplete]);

  return (
    <span className="relative">
      {displayText}
      <span className="absolute -right-4 top-0 animate-pulse">|</span>
    </span>
  );
};

const Hero: React.FC = () => {
  // Estado para controlar se há erro no carregamento do vídeo
  const [videoError, setVideoError] = useState<boolean>(false);
  // Estado para controlar se há erro no carregamento do GIF
  const [gifError, setGifError] = useState<boolean>(false);
  
  // Estados para controlar a sequência de animações de digitação
  const [showFibra, setShowFibra] = useState<boolean>(false);
  const [showOptica, setShowOptica] = useState<boolean>(false);
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);
  const [showCall, setShowCall] = useState<boolean>(false);
  
  return (
    <section id="inicio" className="relative w-full h-screen text-white overflow-hidden">
      {/* Container de Mídia de Fundo */}
      <div className="absolute inset-0 z-0">
        {/* Primeiro, tentamos usar o vídeo Hero.mp4 */}
        {!videoError && (
          <video
            src="/images/Hero.mp4" // Caminho correto para o vídeo na pasta images
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)} // Se o vídeo falhar, marcamos o erro
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        )}
        
        {/* Se o vídeo falhar, tentamos o GIF */}
        {videoError && !gifError && (
          <img
            src="/images/empresariais-mobile.gif" // Caminho correto para o GIF na pasta images
            alt="Background animado"
            className="w-full h-full object-cover"
            onError={() => setGifError(true)} // Se o GIF falhar, marcamos o erro
          />
        )}
        
        {/* Se ambos falharem, usamos o vídeo de backup ou a imagem estática */}
        {videoError && gifError && (
          <video
            src="/images/5452538-sd_640_360_25fps.mp4" // Vídeo de backup
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => {
              // Se todos os vídeos e GIFs falharem, usaríamos a imagem estática,
              // mas não precisamos de outro manipulador de erro aqui
            }}
          >
            {/* Se mesmo o vídeo de backup falhar, mostramos a imagem estática */}
            <img
              src="/images/Banner.png"
              alt="Background estático"
              className="w-full h-full object-cover"
            />
          </video>
        )}

        {/* Overlay preto sobre a mídia para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Conteúdo Principal do Hero com Efeito de Digitação */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-[#FFD700] text-5xl md:text-6xl font-bold mb-6">
            {/* Efeito de Digitação sequencial */}
            <div className="h-16">
              <TypeWriter 
                text="100%" 
                delay={100} 
                onComplete={() => setShowFibra(true)} 
              />
            </div>
            
            <div className="h-16">
              {showFibra && (
                <TypeWriter 
                  text="FIBRA" 
                  delay={90} 
                  onComplete={() => setShowOptica(true)} 
                />
              )}
            </div>
            
            <div className="h-16">
              {showOptica && (
                <TypeWriter 
                  text="ÓPTICA" 
                  delay={80} 
                  onComplete={() => setShowSubtitle(true)} 
                />
              )}
            </div>
          </h1>

          <div className={`transition-opacity duration-1000 ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl mb-8">
              {showSubtitle && (
                <TypeWriter
                  text="Para jogar online, transferir arquivos, estudar online... aproveitar do SEU jeito com planos personalizados para as suas necessidades!"
                  delay={20}
                  onComplete={() => setShowCall(true)}
                />
              )}
            </p>

            <div className={`mt-12 transition-all duration-1000 ${showCall ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              <h2 className="text-3xl font-bold mb-4">ASSINE OS MELHORES</h2>
              <Link href="#planos" className="inline-block">
                <button className="bg-[#E53935] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#c62828] transition-colors animate-pulse">
                  CONHEÇA NOSSOS PLANOS
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Setas de navegação com animação aprimorada */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 ${showCall ? 'opacity-100' : 'opacity-0'}`}>
          <ChevronDown size={36} className="text-[#FFD700] animate-bounce" />
          <ChevronDown size={36} className="text-[#FFD700] -mt-5 animate-bounce" style={{animationDelay: '0.2s'}} />
        </div>
      </div>

      {/* Botão WhatsApp com animação de entrada */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ${showCall ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6 6.31999C16.8 5.49999 15.8 4.84999 14.7 4.39999C13.6 3.94999 12.3 3.69999 11 3.69999C9.7 3.69999 8.39998 3.94999 7.29998 4.39999C6.19998 4.84999 5.19998 5.49999 4.39998 6.31999C3.59998 7.13999 2.99998 8.13999 2.49998 9.23999C2.04998 10.34 1.79998 11.64 1.79998 12.94C1.79998 15.24 2.79998 17.44 4.39998 19.04L4.59998 19.24C4.69998 19.34 4.79998 19.44 4.89998 19.54L5.89998 20.54C5.99998 20.64 6.19998 20.74 6.29998 20.84C6.39998 20.94 6.59998 20.94 6.69998 20.94C6.89998 20.94 7.09998 20.84 7.19998 20.64C7.39998 20.34 7.39998 19.94 7.09998 19.64C6.99998 19.54 6.89998 19.44 6.79998 19.34L5.79998 18.34C5.69998 18.24 5.59998 18.14 5.49998 18.04L5.29998 17.84C3.99998 16.54 3.19998 14.74 3.19998 12.94C3.19998 11.84 3.39998 10.84 3.79998 9.83999C4.19998 8.83999 4.69998 8.03999 5.39998 7.33999C6.09998 6.63999 6.89998 6.13999 7.89998 5.73999C8.89998 5.33999 9.9 5.13999 11 5.13999C12.1 5.13999 13.1 5.33999 14.1 5.73999C15.1 6.13999 15.9 6.63999 16.6 7.33999C17.3 8.03999 17.8 8.83999 18.2 9.83999C18.6 10.84 18.8 11.84 18.8 12.94C18.8 14.74 18 16.54 16.7 17.84L16.5 18.04C16.4 18.14 16.3 18.24 16.2 18.34L15.2 19.34C15.1 19.44 15 19.54 14.9 19.64C14.7 19.94 14.7 20.34 14.9 20.64C15 20.84 15.2 20.94 15.4 20.94C15.5 20.94 15.7 20.94 15.8 20.84C15.9 20.74 16.1 20.64 16.2 20.54L17.2 19.54C17.3 19.44 17.4 19.34 17.5 19.24L17.7 19.04C19.3 17.44 20.3 15.24 20.3 12.94C20.2 11.64 20 10.34 19.5 9.23999C19 8.13999 18.4 7.13999 17.6 6.31999Z" fill="white"/>
            <path d="M16.8 13.9C16.4 13.5 15.7 13.3 15.3 13.7C15 14 14.8 14.3 14.5 14.6C14.4 14.7 14.3 14.7 14.2 14.7C14.1 14.7 13.9 14.6 13.8 14.5C12.8 14 11.9 13.3 11.2 12.5C10.5 11.7 9.89999 10.9 9.39999 9.89999C9.29999 9.69999 9.29999 9.49999 9.39999 9.29999C9.49999 9.09999 9.59999 8.99999 9.79999 8.79999C9.89999 8.69999 9.99999 8.49999 9.99999 8.39999C9.99999 8.29999 9.99999 8.09999 9.99999 7.99999C9.99999 7.79999 9.89999 7.59999 9.79999 7.39999C9.69999 7.19999 9.59999 6.99999 9.49999 6.79999C9.39999 6.59999 9.29999 6.39999 9.19999 6.19999C8.99999 5.79999 8.69999 5.59999 8.29999 5.59999C8.19999 5.59999 7.99999 5.59999 7.89999 5.69999C7.49999 5.79999 7.19999 5.99999 6.89999 6.29999C6.59999 6.59999 6.39999 6.89999 6.29999 7.29999C6.19999 7.69999 6.19999 8.09999 6.19999 8.49999C6.29999 9.09999 6.39999 9.69999 6.59999 10.3C7.09999 11.5 7.79999 12.7 8.69999 13.7C9.09999 14.2 9.59999 14.7 9.99999 15.1C10.7 15.8 11.5 16.4 12.3 16.9C12.8 17.2 13.4 17.4 14 17.6C14.6 17.8 15.2 17.8 15.8 17.7C16.2 17.6 16.6 17.4 16.9 17.1C17.2 16.8 17.4 16.4 17.5 16C17.6 15.6 17.6 15.2 17.5 14.8C17.5 14.5 17.2 14.3 16.8 13.9Z" fill="white"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;