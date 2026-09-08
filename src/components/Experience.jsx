import { EXPERIENCE } from '../data';
export default function Experience() {
  return (
    <section id="logs" className="grid-bg border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="font-display font-black text-4xl md:text-5xl text-center mb-8">EXPERIENCE<span className="text-red-600">_LOG</span></h2>
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="border-2 border-black bg-white p-4 shadow-brutal">
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <h3 className="font-bold text-sm">{e.role}</h3>
                <span className="bg-black text-white text-[10px] px-2 py-1">{e.period}</span>
              </div>
              <p className="text-sm mt-2">• {e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
