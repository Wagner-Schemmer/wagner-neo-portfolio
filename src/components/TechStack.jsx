import { STACK } from '../data';
export default function TechStack() {
  return (
    <section id="stack" className="bg-ink text-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-display font-black text-4xl md:text-5xl mb-1">TECH_<span className="text-green-400">STACK</span></h2>
        <div className="h-[2px] bg-white/80 my-4" />
        <div className="grid grid-cols-4 md:grid-cols-8 border-2 border-white/20">
          {STACK.map((s) => (
            <div key={s} className="border border-white/10 px-2 py-3 text-center text-[11px] font-bold hover:bg-neo hover:text-black transition">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
