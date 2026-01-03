

export default function Quickfacts() {
    return (
        <section class="max-w-6xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
              <p class="text-xs uppercase text-indigo-600 font-semibold">Length</p>
              <h3 class="text-xl font-bold text-slate-800 mt-1">4–8 weeks</h3>
              <p class="text-sm text-slate-600 mt-1">Weekly live sessions + practice time.</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-50 border border-amber-100">
              <p class="text-xs uppercase text-amber-600 font-semibold">Projects</p>
              <h3 class="text-xl font-bold text-slate-800 mt-1">Portfolio-first</h3>
              <p class="text-sm text-slate-600 mt-1">Ship a piece you can publish or add to your reel.</p>
            </div>
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <p class="text-xs uppercase text-emerald-600 font-semibold">Support</p>
              <h3 class="text-xl font-bold text-slate-800 mt-1">Mentors + peers</h3>
              <p class="text-sm text-slate-600 mt-1">Reviews, accountability, and feedback loops.</p>
            </div>
          </div>
        </section>
    )
}