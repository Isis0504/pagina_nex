export function Footer() {
  return (
    <footer className="py-20 bg-black text-white text-center flex flex-col items-center gap-6">
      <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nexis Web</div>

      <div className="flex gap-6 mt-4 text-lg">
        <a href="https://instagram.com/nexisweb" className="hover:text-purple-300">Instagram</a>
        <a href="https://wa.me/573000000000" className="hover:text-purple-300">WhatsApp</a>
        <a href="https://github.com/tuGithub" className="hover:text-purple-300">GitHub</a>
        <a href="mailto:nexisweb@gmail.com" className="hover:text-purple-300">Correo</a>
      </div>

      <p className="text-white/40 mt-6">© 2025 Nexis Web — Todos los derechos reservados.</p>
    </footer>
  );
}
