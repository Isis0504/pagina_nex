import './Footer.css';

export function Footer() {
  const wa1 = '3219820646';
  const wa2 = '3227256784';

  return (
    <footer className="footer-root">
      <div className="brand">Nexis Web</div>

      <div className="footer-social" role="navigation" aria-label="Redes sociales">
        <a href="https://github.com/tuGithub" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.81 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.525.115-3.176 0 0 1.005-.322 3.295 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.14 3 .405 2.285-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.015 2.89-.015 3.28 0 .32.21.7.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          <span className="social-label">GitHub</span>
        </a>

        <a href="https://www.instagram.com/nexisweb" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 5.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zM18.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
          <span className="social-label">Instagram</span>
        </a>

        <a href={`https://wa.me/${wa1}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp 1">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 1.02 11.94 11.94 0 0 0 3.48 3.48 11.94 11.94 0 0 0 1.02 12c0 2.08.54 4.02 1.5 5.72L1 23l5.44-1.4A11.94 11.94 0 0 0 12 22.98 11.94 11.94 0 0 0 20.52 20.52 11.94 11.94 0 0 0 22.98 12 11.94 11.94 0 0 0 20.52 3.48zM16.2 14.1c-.3.8-1.7 1.6-2.4 1.8-.6.2-1.1.2-1.9-.1-1.6-.6-3.2-2.2-3.6-2.7-.4-.5-.9-.6-1.1-1-.2-.3-.1-.6.1-.9.2-.3.7-.8 1-1.2.3-.4.3-.6.5-1 .2-.3.1-.5-.1-.8-.2-.3-1-.9-1.5-1.2-.5-.3-.8-.2-1.2 0-.4.2-1.2.7-1.2 1.6 0 .9.6 1.8 1.2 2.6.7 1 .8 1.4 1.4 2.1.6.7 1.8 1.8 3.3 2.4 1.6.6 2.3.6 2.9.5.5-.1 1.6-.8 1.8-1.6.2-.8.2-1.2 0-1.3-.1-.1-.6-.4-.9-.6z"/></svg>
          <span className="social-label">WhatsApp</span>
        </a>

        <a href={`https://wa.me/${wa2}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp 2">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 1.02 11.94 11.94 0 0 0 3.48 3.48 11.94 11.94 0 0 0 1.02 12c0 2.08.54 4.02 1.5 5.72L1 23l5.44-1.4A11.94 11.94 0 0 0 12 22.98 11.94 11.94 0 0 0 20.52 20.52 11.94 11.94 0 0 0 22.98 12 11.94 11.94 0 0 0 20.52 3.48zM16.2 14.1c-.3.8-1.7 1.6-2.4 1.8-.6.2-1.1.2-1.9-.1-1.6-.6-3.2-2.2-3.6-2.7-.4-.5-.9-.6-1.1-1-.2-.3-.1-.6.1-.9.2-.3.7-.8 1-1.2.3-.4.3-.6.5-1 .2-.3.1-.5-.1-.8-.2-.3-1-.9-1.5-1.2-.5-.3-.8-.2-1.2 0-.4.2-1.2.7-1.2 1.6 0 .9.6 1.8 1.2 2.6.7 1 .8 1.4 1.4 2.1.6.7 1.8 1.8 3.3 2.4 1.6.6 2.3.6 2.9.5.5-.1 1.6-.8 1.8-1.6.2-.8.2-1.2 0-1.3-.1-.1-.6-.4-.9-.6z"/></svg>
          <span className="social-label">WhatsApp</span>
        </a>
      </div>

      <p className="footer-copy">© 2025 Nexis Web — Todos los derechos reservados.</p>
    </footer>
  );
}
