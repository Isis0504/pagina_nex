import React from 'react';
import ProfileCard from './ProfileCard';

export function About() {
  return (
    <section className="py-32 bg-black/95 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Sobre Nosotros</h2>

      <p className="text-center text-lg text-white/70 max-w-2xl mx-auto mb-16">
        Somos Nexis Web, un equipo que transforma ideas en soluciones digitales.
        Amamos crear, innovar y ayudar a negocios a crecer con tecnología real.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full">
        <ProfileCard
          name="Isis Sánchez"
          title="Desarrolladora Frontend"
          handle="isis.s"
          status="Online"
          contactText="Instagram"
          avatarUrl="https://i.pravatar.cc/300?u=isis"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          socialLinks={[
            { platform: 'instagram', url: 'https://instagram.com/isis' },
            { platform: 'github', url: 'https://github.com/isis' }
          ]}
        />

        <ProfileCard
          name="Compañero"
          title="Desarrollador Fullstack"
          handle="compa"
          status="Online"
          contactText="Instagram"
          avatarUrl="https://i.pravatar.cc/300?u=compa"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          socialLinks={[
            { platform: 'instagram', url: 'https://instagram.com/compa' },
            { platform: 'github', url: 'https://github.com/compa' }
          ]}
        />
      </div>
    </section>
  );
}

export default About;
