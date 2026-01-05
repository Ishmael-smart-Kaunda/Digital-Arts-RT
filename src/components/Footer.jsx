export default function () {
    return (
        <footer class="bg-slate-900 text-white mt-12">
            <div class="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                <h4 class="font-bold">Digital Arts Academy MW</h4>
                <p class="mt-2 text-sm text-slate-300">Creating opportunities for Malawian creatives.</p>
                <div class="mt-3 text-xs text-slate-400">Habakkuk 2:2 • Philippians 4:13</div>
                </div>

                <div>
                <h5 class="font-semibold">Quick links</h5>
                <ul class="mt-3 text-sm text-slate-300 space-y-2">
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                </div>

                <div>
                <h5 class="font-semibold">Contact</h5>
                <p class="mt-2 text-sm text-slate-300">Email: hello@digitalartsmw.example</p>
                <p class="text-sm text-slate-300">Follow us: Instagram / TikTok / YouTube</p>
                </div>
            </div>

            <div class="text-center text-xs text-slate-500 py-4">© <span id="year"></span> Digital Arts Academy MW — All rights reserved</div>
        </footer>
    )
}