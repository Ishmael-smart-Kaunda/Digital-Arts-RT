import Headerform from "./Signform"

export default function SignUpForm(){
     return(
        <>   
        <aside className="basis-5/12  text-slate/90  w-9.5/10 h-7/10 md:w-1/2 mx-auto">
            <div className="bg-bgSecondary rounded-xl shadow-sm p-5 mt-2 md:mt-0 ">
              <h3 className="text-lg font-semibold text-primaryText">Sign up for the first cohort</h3>
              <p className="text-sm text-slate-400 mt-2">Limited seats. <span className="font-bold text-green-600 text-base">FREE</span> / low-cost pilot workshops in 2026.</p>

              <Headerform />
            </div>
          </aside>  
        </>
     )
}