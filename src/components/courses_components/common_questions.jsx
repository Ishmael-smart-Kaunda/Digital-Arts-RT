

export default function Questions({data}){
      return(
             <div class="bg-bgSecondary p-4 rounded-xl border border-borderColor transition-colors duration-300">
                <h4 class="font-semibold text-primaryText transition-colors duration-300">{data.question}</h4>
                <p class="mt-2 text-primaryText transition-colors duration-300">{data.response}</p>
             </div> 

      )
}