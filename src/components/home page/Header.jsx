
import { useState } from "react";
function Header(){

        const slideImages=[ 
                            'src/assets/images/DigitalArt.jpg',
                            'src/assets/images/student3.jpg',
                            'src/assets/images/tablet.jpeg'
                          ]
         let imgSrc='src/assets/images/student3.jpg'

         const[slideImage, setSlideImage] =useState('src/assets/images/student3.jpg')

                        for(let i=0; i<slideImages.length;i++){
                           
                            setInterval(() => {
                                setSlideImage(slideImages[i])
                                imgSrc=slideImage
                            }, 5000);
                            
                        }
        {/* let i=0
          slideImages.forEach((source, i)=>{
              setInterval(()=>{
                 imgSrc=slideImages[i]
                 i=(i+1)% slideImages.length
        
              }, 1000)
          })
        */}
        

        return(
              <>
                <div className="relative isolate bg-gradient-to-b from-black/30 to-white/20 w-full min-h-[95vh] md:min-h-[80vh] lg:min-h-[75vh]  pt-30 px-15 pb-5 ">
                     <img src='src/assets/images/Hero Images/DigitalArt.jpg' className="absolute inset-0 object-cover w-full h-full mix-blend-overlay "/>
                     <div className="relative flex flex-col gap-5 md:flex-row w-full md:pb-5">
                         <Hhero/>
                         <SignUpForm/>
                     </div>
                    
                </div>
              </>
        )
}
export default Header



function Hhero(){
     return(
        <>
            <div className="relative z-10 text-white basis-7/12 text-white md:text-left text-center space-y-4">
                <h2 className="text-3xl text-white md:text-5xl font-extrabold ">
                    Digital Arts Academy <span className="text-amber-300">MW</span>
                </h2>
    
            <p className="text-lg md:text-xl max-w-xl drop-shadow mx-auto md:mx-0">
              Empowering Malawian creatives with skills in 
               <strong>digital drawing</strong>, 
               <strong>3D modelling</strong>, and 
               <strong>game development</strong>.
            </p>

             <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#courses" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
                Explore Courses
              </a>
              <a href="contact.html" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/30 text-white/90 backdrop-blur-sm">
                Join a Workshop
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
           
        <aside className="basis-5/12  text-white/90  w-9.5/10 h-7/10 md:w-1/2 mx-auto">
            <div className="bg-gray-800  rounded-xl shadow-xl p-5 mt-2 md:mt-0 ">
              <h3 className="text-lg font-semibold text-white/90">Sign up for the first cohort</h3>
              <p className="text-sm text-slate-400 mt-2">Limited seats. <span className="font-bold text-green-600 text-base">FREE</span> / low-cost pilot workshops in 2026.</p>

              <form id="signup-form" className="mt-4 space-y-3 ">
                <input type="text" name="name" placeholder="Your full name"  required className="w-full px-3 py-2 rounded-md bg-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/50"/>
                <input type="email" name="email" placeholder="Email address" required className="w-full px-3 py-2 rounded-md bg-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/50"/>
                <select name="interest" className="w-full px-3 py-2 rounded-md  bg-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/50">
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