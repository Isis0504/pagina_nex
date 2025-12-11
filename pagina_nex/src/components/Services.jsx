import MagicBento from "./MagicBento";

export function Services() {
  return (
    <section className="py-24 text-white bg-black/90">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Servicios</h2>

      <div className="px-6">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}
