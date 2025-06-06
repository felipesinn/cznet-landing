import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-[#E53935]" />
        ) : (
          <ChevronDown className="text-[#E53935]" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Como escolher o melhor plano de internet fibra óptica residencial?",
      answer: "Para escolher o melhor plano, considere quantos dispositivos serão conectados simultaneamente e quais atividades você realiza online. Para streaming, jogos online e trabalho remoto, recomendamos planos a partir de 400 Mega. Para uso básico, como navegação e redes sociais, planos menores podem ser suficientes."
    },
    {
      question: "Qual a diferença entre a rede 2.4 Ghz e 5 Ghz?",
      answer: "A rede 2.4 GHz oferece maior alcance, mas velocidades menores e é mais suscetível a interferências. Já a rede 5 GHz proporciona velocidades mais altas e menos interferência, porém com alcance reduzido. Dispositivos mais antigos podem ser compatíveis apenas com 2.4 GHz."
    },
    {
      question: "Quais objetos podem causar interferência no sinal de internet?",
      answer: "Diversos objetos podem interferir no sinal Wi-Fi, como paredes grossas, espelhos, micro-ondas em funcionamento, telefones sem fio, monitores de bebê, alto-falantes bluetooth e até aquários. Posicione seu roteador em local central e elevado para minimizar interferências."
    },
    {
      question: "Velocidade significa alcance de internet?",
      answer: "Não. Velocidade refere-se à taxa de transferência de dados, enquanto alcance é a distância que o sinal consegue percorrer. Um plano com alta velocidade não necessariamente terá maior alcance, que depende principalmente do roteador e do ambiente."
    },
    {
      question: "Quando eu devo usar o cabo?",
      answer: "Recomendamos usar conexão via cabo para atividades que exigem estabilidade e velocidade máxima, como jogos online competitivos, streaming em alta resolução, videoconferências profissionais e transferência de arquivos grandes."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Principais dúvidas sobre diversos assuntos
            </h2>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
