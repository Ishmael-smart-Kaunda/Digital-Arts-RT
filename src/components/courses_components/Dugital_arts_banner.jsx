

export default function Banner({data}){
        const bannerData=data[3].reasons
        return(
                    <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-amber-400 flex items-center justify-center text-white font-bold">MW</div>
            <div>
              <p class="text-sm text-slate-500 uppercase tracking-wide">Why Digital Arts Academy</p>
              <h3 class="text-lg font-semibold text-slate-800">Built for Africa's next designers</h3>
            </div>
          </div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            {
                bannerData.map(data => <li key={data.id} class="p-3 rounded-lg bg-slate-50 border border-slate-100" >{data.reason}</li>)
            }
           
          </ul>
          <div class="flex items-center justify-between text-sm text-slate-500">
            <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Free / low-cost pilot</span>
            <span>Hybrid: Lilongwe + online</span>
          </div>
        </div>
        )
}