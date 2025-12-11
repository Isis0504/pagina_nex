import React from 'react';
import ProfileCard from './ProfileCard';
import './About.css';

export function About() {
  return (
    <section className="about-section pt-44 pb-32 bg-black/95 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Sobre Nosotros</h2>

      <p className="text-center text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-20">
        Somos Nexis Web, un equipo que transforma ideas en soluciones digitales.
        Amamos crear, innovar y ayudar a negocios a crecer con tecnología real.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-20 md:gap-32 w-full">
        <ProfileCard
          className="mx-[0.5cm] w-64"
          name="Isis Sanchez"
          title="Desarrolladora"
          handle="isshine_is"
          status="Online"
          contactText="Instagram"
          avatarUrl="https://i.imgur.com/KDzd0BA.jpeg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          socialLinks={[
            { platform: 'instagram', url: 'https://www.instagram.com/isshine_is/' },
            { platform: 'github', url: 'https://github.com/Isis0504' }
          ]}
        />

        <ProfileCard
          className="mx-[0.5cm] w-64"
          name="Nicolas Rodriguez"
          title="Desarrollador"
          handle="millos_daviid"
          status="Online"
          contactText="Instagram"
          avatarUrl="https://i.imgur.com/LxPWjbH.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          socialLinks={[
            { platform: 'instagram', url: 'https://www.instagram.com/millos_daviid/' },
            { platform: 'github', url: 'https://github.com/compa' }
          ]}
        />
      </div>
    </section>
  );
}

export default About;
