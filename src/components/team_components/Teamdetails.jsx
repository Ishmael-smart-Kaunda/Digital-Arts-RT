



export default function Teamdeets() {
    return(
        <main class="max-w-6xl mx-auto px-6 py-12 pt-24">
            <h1 class="text-3xl font-bold mb-6">Founders & Instructors</h1>

            <p class="text-slate-600 mb-6">We are building a small founding team of established creatives. Below are the founding roles — update with real bios and links when you have them.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-4 bg-white rounded-xl shadow">
                <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-amber-400 rounded-full avatar-pulse flex items-center justify-center text-white font-bold">NM</div>
                <div>
                    <h3 class="font-semibold">Nyasha Mpinda</h3>
                    <p class="text-xs text-slate-500">Founder • Vision • 3D lead</p>
                </div>
                </div>
                <p class="mt-4 text-sm text-slate-600">Nyasha is a 3D enthusiast and full-stack creative founder focused on building Malawi's first digital arts academy.</p>
            </div>

            <div class="p-4 bg-white rounded-xl shadow">
                <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-tr from-red-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold">AK</div>
                <div>
                    <h3 class="font-semibold">A. Kambalame</h3>
                    <p class="text-xs text-slate-500">Lead Animator</p>
                </div>
                </div>
                <p class="mt-4 text-sm text-slate-600">Senior animator with experience in commercial animation and creative storytelling.</p>
            </div>

            <div class="p-4 bg-white rounded-xl shadow">
                <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">SD</div>
                <div>
                    <h3 class="font-semibold">S. Dzonzi</h3>
                    <p class="text-xs text-slate-500">Game Dev Mentor</p>
                </div>
                </div>
                <p class="mt-4 text-sm text-slate-600">Game dev and level design mentor focused on small, practical projects for learning.</p>
            </div>
            </div>

            <div class="mt-8">
            <a href="contact.html" class="text-indigo-600">Apply to join the team →</a>
            </div>
        </main>
    )
}