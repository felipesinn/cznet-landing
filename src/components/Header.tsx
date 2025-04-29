import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col items-center font-poppins">
      {/* Barra superior vermelha */}
      <div className="w-full bg-[#e6341a] text-white">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[56px] px-6">
          <span className="flex items-center gap-1">
            <Image src="/icons/clock.svg" alt="Relógio" width={16} height={16} />
            Atendimento presencial: 8h - 12h e 13h30 - 18h
          </span>

          <div className="hidden sm:flex gap-6">
            <Link href="#" className="hover:underline flex items-center gap-1">
              <Image src="/icons/livro.svg" alt="Biblioteca" width={16} height={16} />
              Biblioteca CZNet
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-1">
              <Image src="/icons/people.svg" alt="Trabalhe conosco" width={16} height={16} />
              Trabalhe conosco
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-1">
              <Image src="/icons/messages-2.svg" alt="Suporte" width={16} height={16} />
              Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* Barra branca com logo, navegação e botões */}
      <div className="w-full shadow-md bg-[#fffafa]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[80px] px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Logo CZNet"
              width={128}
              height={32}
              className="object-cover w-32 h-auto"
              priority
            />
          </div>

          {/* Botão hamburguer */}
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

            {/* Scroll suave */}
            <ScrollLink
              to="internet"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[#e6341a] hover:text-cznet-red cursor-pointer"
            >
              Internet
            </ScrollLink>

            <ScrollLink
              to="telefonia"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[#e6341a] hover:text-cznet-red cursor-pointer"
            >
              Telefonia
            </ScrollLink>

            <ScrollLink
              to="tv-box"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[#e6341a] hover:text-cznet-red cursor-pointer"
            >
              TV Box
            </ScrollLink>

            {/* Continua com Link normal */}
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

            {/* Scroll suave Mobile */}
            <ScrollLink
              to="internet"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              Internet
            </ScrollLink>

            <ScrollLink
              to="telefonia"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              Telefonia
            </ScrollLink>

            <ScrollLink
              to="tv-box"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              TV Box
            </ScrollLink>

            {/* Continua normal */}
            <Link href="/area-de-atuacao" onClick={() => setMobileMenuOpen(false)}>
              Área de atuação
            </Link>
            <Link href="/sobre-nos" onClick={() => setMobileMenuOpen(false)}>
              Sobre nós
            </Link>

            {/* Botões Mobile */}
            <div className="flex flex-col gap-2 pt-4">
              <button className="border border-cznet-red text-cznet-red px-4 py-2 rounded-full text-xs hover:bg-cznet-red hover:text-white transition flex items-center gap-2">
                <Image
                  src="/icons/pix.svg"
                  alt="Ícone PIX"
                  width={20}
                  height={20}
                  className="object-cover"
                  priority
                />
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
