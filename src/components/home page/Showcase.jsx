

export default function Showcase({data}) {
    return(  
        <div class="rounded-xl bg-white p-4 shadow hover:shadow-lg ">
            <img src={`./public/images/${data.showImg}`} alt="student" class="w-full h-40 object-cover rounded-md"/>
            <h4 class="mt-3 font-semibold">{data.title}</h4>
            <p class="mt-1 text-sm text-slate-500">{data.description}</p>
            <div class="mt-3 text-xs text-slate-400">Published: {data.publishDate}</div>
        </div>
    )
}
