


export default  function Hero(){

       return(
              <>
                                   
              <section class="relative overflow-hidden pt-0">
                     <div class="absolute inset-0">
                            <div class="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-slate-900/60 to-slate-900/30"></div>
                            <img src="Assets/Images/Hero Images/student1.jpg" alt="Students creating digital art" class="w-full h-full object-cover opacity-80"/>
                     </div>

                     <div class="relative max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
                     <div class="text-white space-y-4">
                     <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs uppercase tracking-wide">2026 pilot cohort</p>
                     <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">Hands-on courses designed for Malawian creatives</h1>
                     <p class="text-lg text-slate-100/90 max-w-xl">Pick a track, build a real project, and leave with a portfolio piece you can show employers or clients.</p>

                     <div class="flex flex-wrap gap-3">
                     <a href="#tracks" class="px-5 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold hero-button">Explore tracks</a>
                     <a href="contact.html" class="px-5 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 hero-button-outline">Join the waitlist</a>
                     </div>
                     </div>

                     <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-4">
                     <div class="flex items-center gap-3">
                     <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-amber-400 flex items-center justify-center text-white font-bold">MW</div>
                     <div>
                            <p class="text-sm text-slate-500 uppercase tracking-wide">Why Digital Arts Academy</p>
                            <h3 class="text-lg font-semibold text-slate-800">Built for Africa's next designers</h3>
                     </div>
                     </div>
                     <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                     <li class="p-3 rounded-lg bg-slate-50 border border-slate-100">Live weekly workshops + office hours</li>
                     <li class="p-3 rounded-lg bg-slate-50 border border-slate-100">Beginner-friendly, laptop-first workflows</li>
                     <li class="p-3 rounded-lg bg-slate-50 border border-slate-100">Portfolio challenges for every track</li>
                     <li class="p-3 rounded-lg bg-slate-50 border border-slate-100">Mentor feedback & community support</li>
                     </ul>
                     <div class="flex items-center justify-between text-sm text-slate-500">
                     <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Free / low-cost pilot</span>
                     <span>Hybrid: Lilongwe + online</span>
                     </div>
                     </div>
                     </div>
              </section>
              
              </>
       )
}
