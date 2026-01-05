
export default function Courses({data}) {
    return (
        
        <article class="course-card bg-white rounded-xl shadow hover:shadow-lg transition p-5">
                    <div class="relative h-40 rounded-md overflow-hidden bg-slate-900">
                        <img src={`./public/images/${data.courseImg}`} class="w-full h-full object-cover opacity-90"></img>
                        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
                        <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl drop-shadow">
                            {data.caption}
                        </div>
                    </div>
                    <h4 class="mt-4 font-semibold">{data.courseName}</h4>
                    <p class="mt-2 text-sm text-slate-500">{data.courseDesc}</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-xs text-slate-400">Duration: {data.duration} weeks</span>
                        <a href="courses.html#drawing" class="text-indigo-600 text-sm">Learn more</a>
                    </div>
                </article>
    )
}