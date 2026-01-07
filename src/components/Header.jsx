import headerData from "../data/headerData";
import SignUpForm from "./home_components/signUpform";
import Banner from "./courses_components/Digital_arts_banner";
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

     {/* next images */}
     function handleNext(){
         setIndex(getNextIndex)
     }
     //to be added if needed
     function handlePrev(){
         setIndex((prevI)=>(prevI-1 + slideImgs.length)% slideImgs.length)
     }
    
     useEffect(()=>{
              const intervalId=setInterval(handleNext,10000)
              return ()=>clearInterval(intervalId)
          },[])
     

    if(pageNmae==='home'){
         return(
          <div className="relative isolate bg-gradient-to-b from-black/30 to-white/20 w-full min-h-[95vh] md:min-h-[80vh] lg:min-h-[75vh] ">
              <img src={imgSrc} alt={imgAlt} className="absolute inset-0 object-cover w-full h-full mix-blend-overlay "/>
                <div className=" relative z-10 max-w-6xl mx-auto px-5 py-24 md:py-28 lg:py-32 flex flex-col md:flex-row md:items-center gap-10     ">
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
                <div className="relative isolate bg-gradient-to-b from-black/30 to-white/20 w-full min-h-[95vh] md:min-h-[80vh] lg:min-h-[75vh] ">
                     <img src='public/images/Hero Images/student1.jpg' alt="" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay "/>
                     <div className=" relative z-10 max-w-6xl mx-auto px-5 py-24 md:py-28 lg:py-32 flex flex-col md:flex-row md:items-center gap-10">
                         <div className="text-white space-y-4">
                            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs uppercase tracking-wide">{courseHeaderObj.cohortText}</p>
                            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{courseHeaderObj.coursesDesign}</h1>
                            <p className="text-lg text-slate-100/90 max-w-xl">{courseHeaderObj.courseProcess}</p>

                            <div className="flex flex-wrap gap-3">
                                  <a href="#tracks" className="px-5 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold hero-button">{courseHeaderObj.buttons.exploreBtn}</a>
                                  <a href="contact.html" className="px-5 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 hero-button-outline">{courseHeaderObj.buttons.joinBtn}</a>
                            </div>
                           </div>
                    <Banner data={headerData}/>   
                     </div>
                
                </div>
           )
}


