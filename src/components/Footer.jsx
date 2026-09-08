export default function Footer() {
  return (
    <footer id="contact" className="bg-paper">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <a href="mailto:wagner.schemmer.martins1@gmail.com" className="inline-block border-2 border-black bg-black text-white px-6 py-3 font-bold shadow-brutal">HIRE_ME.exe → wagner.schemmer.martins1@gmail.com</a>
        <div className="mt-4 flex justify-center gap-4 text-sm font-bold">
          <a href="https://github.com/Wagner-Schemmer" target="_blank" rel="noreferrer" className="underline">GITHUB</a>
          <a href="https://ia-income-micro-saas.vercel.app/" target="_blank" rel="noreferrer" className="underline">API</a>
        </div>
        <p className="text-xs mt-4">© {new Date().getFullYear()} WAGNER SCHEMMER MARTINS — NeoBrutalist rebuild</p>
      </div>
    </footer>
  );
}
