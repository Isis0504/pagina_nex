import Aurora from "./Aurora";
import DecryptedText from "./DecryptedText";
import { StarButton } from "./StarButton";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Aurora Background - Full screen */}
      <div className="absolute inset-0 w-full h-full opacity-80">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.5}
        />
      </div>

      {/* Dark overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl px-6 py-20">
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 leading-tight">
          <DecryptedText
            text="Creamos experiencias digitales modernas"
            animateOn="view"
            speed={100}
            maxIterations={20}
            sequential
          />
        </h1>

        <p className="text-4xl md:text-6xl text-white/90 max-w-4xl mx-auto mb-12 mt-8 leading-tight">
          Páginas web, software a medida y automatizaciones para tu negocio.
        </p>

        <div className="mt-16">
          <StarButton className="text-2xl md:text-3xl px-10 py-5" href="https://wa.me/573000000000">Hablemos 💬</StarButton>
        </div>
      </div>
    </section>
  );
}
