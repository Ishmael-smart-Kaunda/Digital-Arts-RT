




export default function Deliverables() {
    return(
        <section class="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8">
            <div class="p-6 bg-white rounded-2xl shadow card-shadow border border-slate-100">
                <p class="text-sm text-indigo-600 font-semibold uppercase">Learning experience</p>
                <h3 class="text-xl font-bold mt-1">What it feels like</h3>
                <ul class="mt-4 space-y-3 text-slate-600 text-sm">
                <li class="flex gap-3 items-start"><span class="text-indigo-500 mt-0.5">•</span><span>Weekly live sessions (evenings) with replays for catch-up.</span></li>
                <li class="flex gap-3 items-start"><span class="text-indigo-500 mt-0.5">•</span><span>Short challenges after each lesson to lock in skills.</span></li>
                <li class="flex gap-3 items-start"><span class="text-indigo-500 mt-0.5">•</span><span>Critique rooms — submit work, get targeted feedback.</span></li>
                <li class="flex gap-3 items-start"><span class="text-indigo-500 mt-0.5">•</span><span>Community co-working sessions for accountability.</span></li>
                </ul>
                <div class="mt-5 rounded-xl border border-dashed border-indigo-200 p-4 bg-indigo-50 text-indigo-700 text-sm">
                Bonus: guest sessions with Malawian designers + international mentors.
                </div>
            </div>

            <div class="p-6 bg-slate-400 text-white rounded-2xl shadow-lg border border-slate-800">
                <p class="text-sm text-amber-300 font-semibold uppercase">Deliverables</p>
                <h3 class="text-xl font-bold mt-1">What you leave with</h3>
                <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 rounded-lg bg-slate/5 border border-white/10">1 polished portfolio piece</div>
                <div class="p-3 rounded-lg bg-white/5 border border-white/10">Process breakdown PDF</div>
                <div class="p-3 rounded-lg bg-white/5 border border-white/10">Feedback notes from mentors</div>
                <div class="p-3 rounded-lg bg-white/5 border border-white/10">Community & accountability buddies</div>
                </div>
                <p class="mt-4 text-slate-200 text-sm">Scholarships available for students and early-career creatives.</p>
            </div>
        </section>
    )
}