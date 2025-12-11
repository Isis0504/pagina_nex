export function StarButton({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="px-6 py-3 text-white text-lg rounded-xl bg-transparent border border-white hover:bg-white/10 transition">
        {children}
      </button>
    </a>
  );
}
