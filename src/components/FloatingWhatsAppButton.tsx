import React from "react";

export default function FloatingWhatsAppButton(): React.ReactElement {
  const whatsappLink =
    "https://wa.me/5513997022072?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20como%20funcionam%20seus%20atendimentos";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8
        z-[999]
        flex items-center gap-3 flex-row-reverse
        group
      "
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Ícone + anel piscando */}
      <div className="relative flex items-center justify-center">
        {/* Anel piscando (blink duplo) */}
        <span
          className="
            absolute inset-0
            h-14 w-14
            rounded-full
            border-2 border-[#25D366]/80
            animate-blink-double
            pointer-events-none
          "
        />

        {/* Bolinha principal */}
        <div
          className="
            relative flex items-center justify-center
            h-14 w-14 rounded-full
            bg-[#25D366]
            shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            transition-all duration-300
            group-hover:scale-110
            group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]
          "
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.390 0-7.168 5.832-13 13-13s13 5.832 13 13-5.832 13-13 13zM23.407 19.992c-0.372-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.248 0.372-0.961 1.207-1.178 1.455-0.217 0.248-0.434 0.279-0.806 0.093-0.372-0.186-1.571-0.579-2.991-1.845-1.106-0.986-1.853-2.204-2.070-2.576-0.217-0.372-0.023-0.573 0.163-0.758 0.167-0.166 0.372-0.434 0.558-0.651 0.186-0.217 0.248-0.372 0.372-0.620 0.124-0.248 0.062-0.465-0.031-0.651-0.093-0.186-0.837-2.015-1.147-2.759-0.303-0.724-0.611-0.626-0.837-0.638-0.217-0.011-0.465-0.013-0.713-0.013s-0.651 0.093-0.992 0.465c-0.341 0.372-1.301 1.270-1.301 3.099s1.332 3.594 1.518 3.842c0.186 0.248 2.625 4.006 6.359 5.617 0.889 0.383 1.583 0.612 2.125 0.783 0.893 0.284 1.707 0.244 2.351 0.148 0.717-0.107 2.197-0.898 2.507-1.766 0.31-0.868 0.31-1.613 0.217-1.766-0.093-0.154-0.341-0.248-0.713-0.434z" />
          </svg>
        </div>
      </div>

      {/* Etiqueta que aparece no hover (desktop) — aparece à esquerda do botão */}
      <span
        className="
          hidden md:inline-flex
          px-4 py-2 rounded-full
          bg-white/95
          text-sm font-medium text-gray-700
          shadow-md border border-black/5
          translate-x-2 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-300
        "
      >
        Fale com a Amanda
      </span>
    </a>
  );
}
