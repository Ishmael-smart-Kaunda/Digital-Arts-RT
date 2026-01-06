import headerData from "../data/headerData";
import Banner from "./courses_components/Dugital_arts_banner";
import { useEffect, useState } from "react";



export default function Header({pageNmae, data}){

    const homeHeaderObj=data[0]
    const slideImgs=data[1].slideImages
    const courseHeaderObj=data[2]

     const [index, setIndex]=useState(0)
     let imgSrc=slideImgs[index].src
     let imgAlt=slideImgs[index].alt


     {/*next index */}
     function getNextIndex(prevIndex){
         return(prevIndex+1)%slideImgs.length
     }

     {/* next images and previus images */}
     function handleNext(){
         setIndex(getNextIndex)
     }
     
     function handlePrev(){
         setIndex((prevI)=>(prevI-1 + slideImgs.length)% slideImgs.length)
     }
    
     useEffect(()=>{
              const intervalId=setInterval(handleNext,10000)
              return ()=>clearInterval(intervalId)
          },[])
     

    if(pageNmae==='home'){
         return(
          <div className="relative isolate bg-gradient-to-b from-black/30 to-white/20 w-full min-h-[95vh] md:min-h-[80vh] lg:min-h-[75vh]  pt-30 px-15 pb-5 ">
              <img src={imgSrc} alt={imgAlt} className="absolute inset-0 object-cover w-full h-full mix-blend-overlay "/>
                <div className="relative flex flex-col gap-5 md:flex-row w-full md:pb-5">
                  <div className="relative z-10 text-white basis-7/12 text-white md:text-left text-center space-y-4">
                        <h2 className="text-3xl text-white md:text-5xl font-extrabold ">
                            {homeHeaderObj.orgName}<span className="text-amber-300">{homeHeaderObj.Logo}</span>
                        </h2>
                    <p className="text-lg md:text-xl max-w-xl drop-shadow mx-auto md:mx-0">
                      {homeHeaderObj.courseDescript} 
                      <strong>{homeHeaderObj.courses.drawing}</strong>, 
                      <strong>{homeHeaderObj.courses.modelling}</strong>, and 
                      <strong>{homeHeaderObj.courses.game}</strong>.
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
                  <SignUpForm/>
                </div>
             </div>
           )
           }
            return(
                <div className="relative isolate bg-gradient-to-b from-black/30 to-white/20 w-full min-h-[95vh] md:min-h-[80vh] lg:min-h-[75vh]  pt-30 px-15 pb-5 ">
                     <img src='public/images/Hero Images/student1.jpg' alt="" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay "/>
                     <div className="relative flex flex-col gap-5 md:flex-row w-full md:pb-5">
                         <div class="text-white space-y-4">
                            <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs uppercase tracking-wide">{courseHeaderObj.cohortText}</p>
                            <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">{courseHeaderObj.coursesDesign}</h1>
                            <p class="text-lg text-slate-100/90 max-w-xl">{courseHeaderObj.courseProcess}</p>

                            <div class="flex flex-wrap gap-3">
                                  <a href="#tracks" class="px-5 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold hero-button">{courseHeaderObj.buttons.exploreBtn}</a>
                                  <a href="contact.html" class="px-5 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 hero-button-outline">{courseHeaderObj.buttons.joinBtn}</a>
                            </div>
                           </div>
                    <Banner data={headerData}/>   
                     </div>
                
                </div>
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