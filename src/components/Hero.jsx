export default function Hero() {
  return (
    <section id="about" className="grid-bg border-b-2 border-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center relative">
        <span className="inline-block border-2 border-black bg-white text-[11px] px-2 py-1 shadow-brutalSm mb-6">● SYSTEM STATUS: ONLINE</span>
        <h1 className="font-display font-black leading-[0.9] text-6xl md:text-8xl">FULL STACK<br /><span className="text-outline">DEVELOPER</span></h1>
        <div className="mx-auto mt-6 max-w-xl border-2 border-black bg-neo px-4 py-3 shadow-brutal text-sm font-bold">
          I build digital products that refuse to be boring.<br />React • Node • Python • Java
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#work" className="border-2 border-black bg-black text-white px-4 py-2 text-sm font-bold shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">VIEW DATABASE</a>
          <a href="#contact" className="border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">↓ DOWNLOAD CV</a>
        </div>
      </div>
    </section>
  );
}
