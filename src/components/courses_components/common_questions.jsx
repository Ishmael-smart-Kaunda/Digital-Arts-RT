

export default function Questions({data}){
      return(
             <div class="bg-bgSecondary p-4 rounded-xl border border-borderColor ">
                <h4 class="font-semibold text-primaryText ">{data.question}</h4>
                <p class="mt-2 text-primaryText">{data.response}</p>
             </div> 

      )
}