export default function Navbar() {
  return (
    <header className="border-b-2 border-black bg-paper sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <span className="border-2 border-black bg-white px-2 py-0.5 text-xs font-bold shadow-brutalSm">WAGNER.exe</span>
        <nav className="hidden sm:flex items-center gap-1 border-2 border-black bg-white px-2 py-1 text-[11px] font-bold shadow-brutalSm">
          <a href="#about" className="px-2 hover:bg-black hover:text-white">/ABOUT</a>
          <a href="#stack" className="px-2 hover:bg-black hover:text-white">/SKILLS</a>
          <a href="#logs" className="px-2 hover:bg-black hover:text-white">/LOGS</a>
          <a href="#work" className="px-2 hover:bg-black hover:text-white">/WORK</a>
          <a href="#contact" className="px-2 bg-neo border border-black">HIRE ME</a>
        </nav>
      </div>
    </header>
  );
}
