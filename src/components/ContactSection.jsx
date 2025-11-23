import React from "react";

const ContactCard = ({
  icon,
  title,
  subtitle,
  href,
  buttonText,
  btnClass = "bg-green-500",
}) => (
  <div
    className="
      bg-card/90 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-6 w-full max-w-md
      border border-border/60 hover:shadow-2xl hover:-translate-y-1
      transition-all duration-300
    "
  >
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl mb-3 drop-shadow-sm">{icon}</div>

      <h4 className="text-lg font-semibold mb-1 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>

      <a
        href={href}
        className={`
          px-6 py-2.5 rounded-full text-sm font-medium shadow-md
          hover:brightness-110 transition-all text-white
          ${btnClass}
        `}
      >
        {buttonText}
      </a>
    </div>
  </div>
);

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        min-h-screen py-20 px-4
        bg-gradient-to-b
        from-[#f7fcff] via-[#eef8fb] to-[#dff3ee]
      "
    >
      <div className="container mx-auto">
        <h2
          className="
            text-4xl md:text-5xl font-serif font-semibold
            text-primary text-center mb-3 drop-shadow-sm
          "
        >
          Vamos cuidar das emoções juntos?
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Entre em contato e vamos conversar sobre como posso ajudar você e sua
          família.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Formulário */}
          <div
            className="
              bg-card/95 backdrop-blur-md p-10 rounded-2xl shadow-xl flex-1
              border border-border/70 hover:shadow-2xl transition-all
            "
          >
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Nome do responsável *
                </label>
                <input
                  className="
                    w-full rounded-lg border border-border px-4 py-2.5
                    bg-background/60
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Idade da criança/adolescente *
                </label>
                <input
                  className="
                    w-full rounded-lg border border-border px-4 py-2.5
                    bg-background/60
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                  placeholder="Ex: 8 anos"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    E-mail *
                  </label>
                  <input
                    className="
                      w-full rounded-lg border border-border px-4 py-2.5
                      bg-background/60
                      focus:outline-none focus:ring-2 focus:ring-primary/30
                    "
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    className="
                      w-full rounded-lg border border-border px-4 py-2.5
                      bg-background/60
                      focus:outline-none focus:ring-2 focus:ring-primary/30
                    "
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Melhor horário para contato
                </label>
                <input
                  className="
                    w-full rounded-lg border border-border px-4 py-2.5
                    bg-background/60
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                  placeholder="Ex: manhã, tarde ou noite"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  className="
                    w-full rounded-lg border border-border px-4 py-2.5 h-28
                    resize-none bg-background/60
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                  placeholder="Conte um pouco sobre o que está buscando..."
                />
              </div>

              <button
                type="button"
                className="
                  w-full rounded-full py-3 font-medium text-primary-foreground
                  bg-gradient-to-r from-primary to-accent
                  shadow-lg hover:shadow-xl hover:scale-[1.02]
                  transition-all
                "
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Coluna direita – cartões de contato */}
          <div className="flex flex-col w-full max-w-sm mx-auto">
            <ContactCard
              icon={<span>💬</span>}
              title="WhatsApp"
              subtitle="13 99702-2072"
              href="https://api.whatsapp.com/send/?phone=5513997022072&text=Ol%C3%A1%2C+quero+saber+mais+sobre+como+funciona+seus+atendimentos&type=phone_number&app_absent=0"
              buttonText="Chamar no WhatsApp"
              btnClass="bg-green-500"
            />

            <ContactCard
              icon={<span>📸</span>}
              title="Instagram"
              subtitle="@amanda_psicologa"
              href="https://instagram.com/amanda_psicologa"
              buttonText="Seguir no Instagram"
              btnClass="bg-gradient-to-r from-pink-500 to-yellow-400"
            />

            <ContactCard
              icon={<span>📍</span>}
              title="Atendimento Online"
              subtitle="Guarulhos / SP"
              href="#"
              buttonText="Ver endereço"
              btnClass="bg-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
