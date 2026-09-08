import { REPORTS } from '../data';
export default function Reports() {
  return (
    <section className="bg-ink text-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-6"><span className="border border-white/30 px-2 py-1 text-[11px]">••• USER_REPORTS.txt</span></div>
        <div className="grid md:grid-cols-3 gap-4">
          {REPORTS.map((r, i) => (
            <div key={i} className="border border-white/20 bg-white/5 p-4 text-sm">“{r}”<div className="text-yellow-300 mt-2">★★★★★</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
