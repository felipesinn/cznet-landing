import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Clock, Book, Users, MessageSquare, CreditCard } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col items-center font-poppins">
      {/* Barra superior vermelha - AGORA COM O <div> DE ABERTURA CORRETO */}
      <div
        className={`w-full bg-[#e6341a] text-white transition-all duration-300 ease-in-out
                    ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-[56px] opacity-100"}`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center h-full px-6">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            Atendimento presencial: 8h - 12h e 13h30 - 18h
          </span>

          <div className="hidden sm:flex gap-6">
            <Link href="#" className="hover:underline flex items-center gap-1">
              <Book size={16} />
              Biblioteca CZNet
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-1">
              <Users size={16} />
              Trabalhe conosco
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-1">
              <MessageSquare size={16} />
              Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* Barra branca com logo, navegação e botões - Agora com efeito de encolher no scroll */}
      <div
        className={`w-full shadow-md bg-[#fffafa] transition-all duration-300 ease-in-out
                    ${scrolled ? "h-[60px] shadow-lg" : "h-[80px]"}`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full px-6">
          {/* Logo - Agora como <img> padrão e encolhe no scroll */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/Logo.png"
                alt="Logo CZNet"
                className={`object-cover h-auto transition-all duration-300 ease-in-out
                            ${scrolled ? "w-24" : "w-32"}`}
              />
            </Link>
          </div>

          {/* Botão hamburguer (já usava Lucide React) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="text-[#e6341a]"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-[#e6341a] border-b-2 border-cznet-red pb-1">
              Início
            </Link>

            {/* Scroll suave para "Internet" apontando para a seção "planos" */}
            <ScrollLink
              to="planos"
              smooth={true}
              duration={400}
              offset={scrolled ? -60 : -80}
              className="text-[#e6341a] hover:text-cznet-red cursor-pointer"
            >
              Internet
            </ScrollLink>

            <ScrollLink
              to="telefonia"
              smooth={true}
              duration={800}
              offset={scrolled ? -60 : -80}
              className="text-[#e6341a] hover:text-cznet-red cursor-pointer"
            >
              Telefonia
            </ScrollLink>

            <ScrollLink
              to="tv-box"
              smooth={true}
              duration={800}
              offset={scrolled ? -60 : -80}
              className="text-[#e6341a] hover:text-cznet-red cursor-pointer"
            >
              TV Box
            </ScrollLink>

            <Link href="/area-de-atuacao" className="text-[#e6341a] hover:text-cznet-red">
              Área de atuação
            </Link>
            <Link href="/sobre-nos" className="text-[#e6341a] hover:text-cznet-red">
              Sobre nós
            </Link>
          </nav>

          {/* Botões Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="border border-cznet-red text-cznet-red px-6 py-3 rounded-full text-sm hover:bg-[#e6341a] hover:text-white transition"
              aria-label="Área PIX"
            >
              Área PIX
            </button>
            <button
              className="bg-[#e6341a] text-white px-6 py-3 rounded-full text-sm hover:bg-red-600 transition"
              aria-label="Portal Pagamentos"
            >
              Portal Pagamentos
            </button>
          </div>
        </div>

        {/* Navegação Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 shadow-inner text-[#e6341a]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-semibold">
              Início
            </Link>

            <ScrollLink
              to="planos"
              smooth={true}
              duration={500}
              offset={scrolled ? -60 : -80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              Internet
            </ScrollLink>

            <ScrollLink
              to="telefonia"
              smooth={true}
              duration={500}
              offset={scrolled ? -60 : -80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              Telefonia
            </ScrollLink>

            <ScrollLink
              to="tv-box"
              smooth={true}
              duration={500}
              offset={scrolled ? -60 : -80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              TV Box
            </ScrollLink>

            <Link href="/area-de-atuacao" onClick={() => setMobileMenuOpen(false)}>
              Área de atuação
            </Link>
            <Link href="/sobre-nos" onClick={() => setMobileMenuOpen(false)}>
              Sobre nós
            </Link>

            {/* Botões Mobile */}
            <div className="flex flex-col gap-2 pt-4">
              <button className="border border-cznet-red text-cznet-red px-4 py-2 rounded-full text-xs hover:bg-cznet-red hover:text-white transition flex items-center gap-2">
                <CreditCard size={20} />
                Área PIX
              </button>
              <button className="bg-[#e6341a] text-white px-4 py-2 rounded-full text-xs hover:bg-red-600 transition">
                Portal Pagamentos
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;