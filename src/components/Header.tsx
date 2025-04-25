import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full">
      {/* Faixa Superior */}
      <div className="bg-cznet-red text-white text-sm py-1">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>Atendimento presencial: 8h - 12h e 13h30 - 18h</span>
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">📚 Biblioteca CZNet</Link>
            <Link href="#" className="hover:underline">💼 Trabalhe conosco</Link>
            <Link href="#" className="hover:underline">🛠 Suporte</Link>
          </div>
        </div>
      </div>

      {/* Menu Principal */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cznet-red">cznet</Link>

          {/* Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-cznet-red">Início</Link>
            <Link href="/internet" className="text-gray-700 hover:text-cznet-red">Internet</Link>
            <Link href="/telefonia" className="text-gray-700 hover:text-cznet-red">Telefonia</Link>
            <Link href="/tv-por-assinatura" className="text-gray-700 hover:text-cznet-red">TV Box</Link>
            <Link href="/area-de-atuacao" className="text-gray-700 hover:text-cznet-red">Área de atuação</Link>
            <Link href="/sobre-nos" className="text-gray-700 hover:text-cznet-red">Sobre nós</Link>
          </nav>

          {/* Botões à direita */}
          <div className="flex items-center space-x-2">
            <button className="border border-cznet-red text-cznet-red px-3 py-1 rounded-full text-sm hover:bg-cznet-red hover:text-white transition">
              Área PIX
            </button>
            <button className="bg-cznet-red text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition">
              Portal Pagamentos
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
