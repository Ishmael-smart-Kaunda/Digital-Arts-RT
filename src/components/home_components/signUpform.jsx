

export default function SignUpForm(){
     return(
        <>   
        <aside className="basis-5/12  text-slate/90  w-9.5/10 h-7/10 md:w-1/2 mx-auto">
            <div className="bg-white  rounded-xl shadow-xl p-5 mt-2 md:mt-0 ">
              <h3 className="text-lg font-semibold text-slate-700">Sign up for the first cohort</h3>
              <p className="text-sm text-slate-400 mt-2">Limited seats. <span className="font-bold text-green-600 text-base">FREE</span> / low-cost pilot workshops in 2026.</p>

              <form id="signup-form" className="mt-4 space-y-3 ">
                <input type="text" name="name" placeholder="Your full name"  required className="w-full px-3 py-2 rounded-md border"/>
                <input type="email" name="email" placeholder="Email address" required className="w-full px-3 py-2 rounded-md border"/>
          
                <select name="interest" className="text-[1rem] w-full max-w-full overflow-hidden px-3 py-2 rounded-md border">
                  <option value="" className="text-[1rem] " >I'm interested in...</option>
                  <option className="">Digital drawing</option>
                  <option   >3D modelling (Blender)</option>
                  <option>Game dev (Godot/Unreal)</option>
                </select>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md">Reserve seat</button>
                <p className="text-xs text-slate-400 mt-1">We respect your privacy — no spam.</p>
              </form>
            </div>
          </aside>  
        </>
     )
}