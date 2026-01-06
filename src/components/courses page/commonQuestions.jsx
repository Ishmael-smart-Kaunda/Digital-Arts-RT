

export default function Questions({data}){
    return(
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 class="font-semibold text-slate-900">{data.question}</h4>
            <p class="mt-2 text-slate-600">{data.response}</p>
          </div>
    )
}