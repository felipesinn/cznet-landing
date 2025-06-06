import React from 'react';

const TVBox = () => {
  const channels = [
    { name: 'TNT', logo: '/images/logos/tnt.png' },
    { name: 'SporTV', logo: '/images/logos/sportv.png' },
    { name: 'Animal Planet', logo: '/images/logos/animal-planet.png' },
    { name: 'ESPN', logo: '/images/logos/espn.png' },
    { name: 'Telecine', logo: '/images/logos/telecine.png' },
    { name: 'Warner', logo: '/images/logos/warner.png' }
  ];

  const benefits = [
    {
      icon: '/images/icons/streaming.svg',
      title: 'Seu streaming e apps favoritos em um só',
      description: 'Acesse Netflix, Prime Video, Disney+ e muito mais em um só lugar'
    },
    {
      icon: '/images/icons/tv.svg',
      title: 'A comodidade da TV em Full HD com qualidade de fibra',
      description: 'Assista seus programas favoritos com a melhor qualidade de imagem'
    },
    {
      icon: '/images/icons/anatel.svg',
      title: 'Homologado pela Anatel: qualidade garantida',
      description: 'Equipamento certificado e aprovado pelos órgãos reguladores'
    },
    {
      icon: '/images/icons/smart.svg',
      title: 'Transforme sua TV em Smart com nosso +TV PLAY',
      description: 'Mesmo TVs antigas ganham funções inteligentes com nosso dispositivo'
    }
  ];

  return (
    <section id="tvbox" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Os melhores canais estão na nossa Watch TV!</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Filmes premiados e séries exclusivas. Programação especial para crianças e toda a família. 
            Tudo isso nos melhores canais por assinatura, disponível aqui.
          </p>
        </div>

        {/* Logos dos canais */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {channels.map((channel, index) => (
            <div key={index} className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2">
              {/* LINHA MODIFICADA: Comentada a tag <img> para os logos dos canais */}
              {/* <img 
                src={channel.logo} 
                alt={channel.name} 
                className="max-w-full max-h-full object-contain" 
              /> */}
              {/* Placeholder para os logos dos canais */}
              <span className="text-sm text-gray-500 text-center">{channel.name} Logo</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <button className="bg-[#E53935] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#c62828] transition-colors">
            Conheça o +TVPLAY &gt;&gt;&gt;
          </button>
        </div>

        {/* Seção +TVPLAY */}
        <div className="bg-[#222222] rounded-lg p-8 mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2">+TVPLAY</h3>
            <p className="text-2xl font-semibold text-[#E53935]">é muito mais que TV! 📺</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#333333] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* LINHA MODIFICADA: Comentada a tag <img> para os ícones dos benefícios */}
                  {/* <img src={benefit.icon} alt="" className="w-8 h-8" /> */}
                  {/* Placeholder para os ícones dos benefícios */}
                  <span className="text-xl text-white">Icon</span> 
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#E53935] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#c62828] transition-colors">
              Contratar agora &gt;&gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVBox;