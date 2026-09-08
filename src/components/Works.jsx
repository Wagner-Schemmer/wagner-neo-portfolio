import { WORKS } from '../data';
export default function Works() {
  return (
    <section id="work" className="border-b-2 border-black">
      <div className="bg-neo border-b-2 border-black py-3 text-center font-display font-black text-3xl md:text-4xl">SELECTED_WORKS</div>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-4">
        {WORKS.map((w) => (
          <a key={w.title} href={w.link} target="_blank" rel="noreferrer" className="border-2 border-black bg-white p-4 shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none block">
            <div className="text-[10px] font-bold bg-black text-white inline-block px-2 py-0.5 mb-2">{w.tags}</div>
            <h3 className="font-display font-black text-xl">{w.title}</h3>
            <p className="text-sm mt-2">{w.desc}</p>
            <span className="text-xs font-bold mt-3 inline-block border-b-2 border-black">OPEN →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
