

export default function Member({data}){
         return( <>
                <div class="p-4 bg-bgSecondary rounded-xl shadow transition-colors duration-300">
                    <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-amber-400 rounded-full avatar-pulse flex items-center justify-center text-white font-bold">{data.image}</div>
                    <div>
                        <h3 class="font-semibold text-secondaryText transition-colors duration-300">{data.name}</h3>
                        <p class="text-xs text-specialText1 transition-colors duration-300">{data.role}</p>
                    </div>
                    </div>
                <p class="mt-4 text-sm text-secondaryText transition-colors duration-300">{data.description}</p>
            </div>
        </>

            
         )
}