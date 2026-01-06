import headerData from "../../data/headerData";
import { useState } from "react";
export default function Header(){

        return(
              <>
                <div className="relative isolate bg-gradient-to-b from-black/30 to-white/20 w-full min-h-[95vh] md:min-h-[80vh] lg:min-h-[75vh]  pt-30 px-15 pb-5 ">
                     <img src='src/assets/images/Hero Images/DigitalArt.jpg' className="absolute inset-0 object-cover w-full h-full mix-blend-overlay "/>
                     <div className="relative flex flex-col gap-5 md:flex-row w-full md:pb-5">
                         <Hhero data={headerData}/>
                         <SignUpForm/>
                     </div>
                    
                </div>
              </>
        )
}



function Hhero({data}){
     const homeHeaderObj=data[0]
     return(
        <>
            <div className="relative z-10 text-white basis-7/12 text-white md:text-left text-center space-y-4">
                <h2 className="text-3xl text-white md:text-5xl font-extrabold ">
                    {homeHeaderObj.orgName}<span className="text-amber-300">{homeHeaderObj.Logo}</span>
                </h2>
    
            <p className="text-lg md:text-xl max-w-xl drop-shadow mx-auto md:mx-0">
              {homeHeaderObj.courseDescript} 
               <strong>{homeHeaderObj.drawing}</strong>, 
               <strong>{homeHeaderObj.modelling}</strong>, and 
               <strong>{homeHeaderObj.game}</strong>.
            </p>

             <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#courses" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
                {homeHeaderObj.buttons.exploreBtn}
              </a>
              <a href="contact.html" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/30 text-white/90 backdrop-blur-sm">
                {homeHeaderObj.buttons.joinBtn}
              </a>
            </div>

            <div className="max-w-md bg-white/10 p-4 rounded-md backdrop-blur-sm inline-block mx-auto md:mx-0">
              <p className="text-sm text-amber-100 italic">"Write the vision and make it plain..." — <strong>Habakkuk 2:2</strong></p>
              <p className="text-sm text-amber-100 italic mt-1">"I can do all things through Christ..." — <strong>Philippians 4:13</strong></p>
            </div>
          
        </div>
        </>
     )
}

function SignUpForm(){
     return(
        <>
           
        <aside className="basis-5/12  text-slate/90  w-9.5/10 h-7/10 md:w-1/2 mx-auto">
            <div className="bg-white  rounded-xl shadow-xl p-5 mt-2 md:mt-0 ">
              <h3 className="text-lg font-semibold text-slate-700">Sign up for the first cohort</h3>
              <p className="text-sm text-slate-400 mt-2">Limited seats. <span className="font-bold text-green-600 text-base">FREE</span> / low-cost pilot workshops in 2026.</p>

              <form id="signup-form" className="mt-4 space-y-3 ">
                <input type="text" name="name" placeholder="Your full name"  required className="w-full px-3 py-2 rounded-md border"/>
                <input type="email" name="email" placeholder="Email address" required className="w-full px-3 py-2 rounded-md border"/>
                <select name="interest" className="w-full px-3 py-2 rounded-md border">
                  <option value="">I'm interested in...</option>
                  <option>Digital drawing</option>
                  <option>3D modelling (Blender)</option>
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