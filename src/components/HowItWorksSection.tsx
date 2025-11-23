import React from "react";
import {
  AlertTriangle,
  HeartHandshake,
  Brain,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";

export default function HowItWorksSection(): React.ReactElement {
  const sinais = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      title: "A ansiedade está atrapalhando o seu dia a dia",
      description:
        "Preocupações constantes, dificuldade para relaxar, mente acelerada e sensação de estar sempre em alerta.",
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Emoções difíceis de organizar sozinha",
      description:
        "Oscilações de humor, choro fácil, sensação de esgotamento emocional ou de estar “no automático”.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      title: "Você sente falta de um espaço de acolhimento",
      description:
        "Desejo de ser ouvida sem julgamentos, com alguém que ajude a ressignificar situações e construir novas estratégias.",
    },
  ];

  const passos = [
    {
      step: "01",
      title: "Contato inicial",
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      description:
        "Você envia uma mensagem pelo WhatsApp e conversamos brevemente sobre o que está acontecendo e qual o seu objetivo com a terapia.",
    },
    {
      step: "02",
      title: "Primeira sessão",
      icon: <Brain className="w-5 h-5 text-primary" />,
      description:
        "Na sessão inicial, alinhamos expectativas, conheço um pouco da sua história e começamos a identificar os principais pontos de cuidado.",
    },
    {
      step: "03",
      title: "Plano terapêutico",
      icon: <CalendarCheck className="w-5 h-5 text-primary" />,
      description:
        "Organizamos a frequência dos encontros, combinamos horários e construímos, juntas, um caminho de cuidado emocional contínuo.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Coluna esquerda – texto + cards de sinais */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary/80">
                Quando buscar terapia
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary">
                Quando buscas ajuda profissionalizada
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Reconhecer que precisa de ajuda já é um grande gesto de
                cuidado consigo mesma. A terapia é um espaço seguro para olhar
                com calma para o que você sente, organizar pensamentos e
                construir recursos emocionais para a sua rotina.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sinais.map((item) => (
                <div
                  key={item.title}
                  className="bg-card/80 border border-border/60 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-3"
                >
                  <div className="shrink-0 flex items-start justify-center rounded-xl bg-primary/10 p-2">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm md:text-base text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita – timeline de como funciona */}
          <div className="animate-fade-in-up lg:animate-none lg:opacity-100">
            <div className="bg-card/90 border border-border rounded-3xl shadow-md p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Como funciona na prática
              </h4>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                O processo é leve, acolhedor e pensado para que você se sinta
                segura em cada etapa. Tudo acontece de forma online, com
                sigilo e cuidado profissional.
              </p>

              <div className="space-y-6">
                {passos.map((passo, index) => (
                  <div key={passo.step} className="flex gap-4">
                    {/* Linha da timeline */}
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-semibold text-primary">
                        {passo.step}
                      </div>
                      {index < passos.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent mt-1" />
                      )}
                    </div>

                    {/* Conteúdo do passo */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        {passo.icon}
                        <h5 className="font-semibold text-sm md:text-base text-foreground">
                          {passo.title}
                        </h5>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {passo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs md:text-sm text-muted-foreground italic">
                Durante todo o processo, você é convidada a falar no seu
                tempo, com respeito às suas histórias, limites e necessidades
                atuais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
