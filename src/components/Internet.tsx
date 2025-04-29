import Image from "next/image";

const Internet = () => {
  return (
    <div className="w-full bg-[#e6341a] py-8 flex justify-center font-bold">
      <div className="max-w-[1248px] w-full text-center">
        {/* Texto Principal */}
        <h1 className="text-3xl font-bold text-[#fffafa] mb-16">
          Internet <strong className="text-4xl">fibra óptica</strong> para todas as suas <strong className="text-4xl">necessidades</strong>
        </h1>

        {/* Cards */}
        <div id="internet" className="mt-10 grid grid-cols-4 gap-6 font-bold" style={{ height: "384px" }}>
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img-internet/card1.png"
              alt="Baixe e Envie Arquivos"
              width={294}
              height={172}
              className="w-[294px] h-[172px] object-cover"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-4 text-start">Baixe e Envie Arquivos</h3>
              <p className="text-[#fffafa] text-start">
                Conte com a nossa internet para transferir arquivos pesados com rapidez e
                segurança. Ideal para quem trabalha com documentos, vídeos, fotos ou projetos
                na nuvem. Mais produtividade, menos espera.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img-internet/card2.png"
              alt="Filmes e Streamings"
              width={294}
              height={384}
              className="w-[294px] h-[172px] object-cover"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-4 text-start">Filmes e Streamings</h3>
              <p className="text-[#fffafa] text-start">
                Assista às suas séries, filmes e vídeos favoritos com qualidade e sem
                interrupções com estabilidade e velocidade para você aproveitar o melhor do
                entretenimento online em qualquer cômodo da casa.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img-internet/card3.png"
              alt="Jogue Online"
              width={294}
              height={172}
              className="w-[294px] h-[172px] object-cover"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-4 text-start">Jogue Online</h3>
              <p className="text-[#fffafa] text-start">
                Para quem leva o jogo a sério: baixa latência, conexão estável e velocidade.
                Com a CZnet, suas partidas online ficam muito mais fluidas e competitivas. Menos
                lag, mais vitórias.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img-internet/card4.png"
              alt="Trabalhar e Estudar"
              width={294}
              height={172}
              className="w-[294px] h-[172px] object-cover"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-4 text-start">Trabalhar e Estudar</h3>
              <p className="text-[#fffafa] text-start">
                Reuniões de vídeo, aulas ao vivo, envio de trabalhos e acesso a plataformas sem
                travar. Acompanhe sua rotina profissional ou acadêmica com o desempenho que você
                precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internet;
