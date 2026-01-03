

export default function Coursetrack({badges, courseImg, title, description, takeAways, tools}) {
    return (
        <article id="drawing" class="course-card bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-slate-100">
          <div class="relative h-40 rounded-md overflow-hidden bg-slate-900">
            <img src={`./public/images/${courseImg}`} alt="Digital drawing students" class="w-full h-full object-cover opacity-90"></img>
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
            <div class="absolute inset-0 flex items-start justify-between p-3 text-white">
              <span class="px-3 py-1 rounded-full bg-indigo-500/90 text-xs font-semibold">{badges.duration} weeks</span>
              <span class="px-3 py-1 rounded-full bg-white/15 text-xs">{badges.type}</span>
            </div>
          </div>
          <h3 class="mt-4 font-semibold text-lg">{title}</h3>
          <p class="mt-2 text-sm text-slate-600"> {description} </p>
          <ul class="mt-3 text-sm text-slate-600 space-y-2 list-disc pl-5">
            <li> {takeAways.takeAway1} </li>
            <li>{takeAways.takeAway2} </li>
            <li>{takeAways.takeAway3} </li>
          </ul>
          <div class="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Tools: {tools} </span>
            <a href="index.html#courses" class="text-indigo-600 font-semibold">Preview</a>
          </div>
        </article>
    )
}