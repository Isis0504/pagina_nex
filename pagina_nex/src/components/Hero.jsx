import Aurora from "./Aurora";
import ScrollFloat from "./ScrollFloat";
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
      <div className="relative z-10 max-w-4xl px-6 py-20">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Creamos experiencias digitales modernas
        </ScrollFloat>

        <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-12 mt-8">
          Páginas web, software a medida y automatizaciones para tu negocio.
        </p>

        <div className="mt-12">
          <StarButton href="https://wa.me/573000000000">Hablemos 💬</StarButton>
        </div>
      </div>
    </section>
  );
}
