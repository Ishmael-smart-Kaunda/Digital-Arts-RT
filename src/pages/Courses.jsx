import Coursetrack from "../components/courses_components/Coursetrack"
import Coursetrackdata from "../data/Trackdata"
import Quickfacts from "../components/courses_components/Quickfacts"
import Deliverables from "../components/courses_components/Deliverables"

import CoursesActionCall from "../components/courses_components/CTA"
import Hero from "../components/courses_components/Hero"
import Footer from "../components/Footer"


{/*import Questions from "../components/courses_components/commonQuestions.jsx"
import FAQdata from './data/FAQdata.js'*/}




export default function Courses() {
    {/*const commonQuestions= FAQdata.map(question=>{
        return<Questions key={question.id} data={data}/>
    })
   */}
    const courseTracks = Coursetrackdata.map(track => {
        return <Coursetrack 
            key={track.id}
            courseImg = {track.courseImg}
            title = {track.title}
            description = {track.info.description}
            takeAways = {track.info.takeAways}
            tools = {track.tools}
            badges = {track.bagdes}
        />
    })

    return (
        <>
            <Hero />

            <Quickfacts />

            <section id="tracks" class="max-w-6xl mx-auto px-6 pb-6">
                <div class="flex items-center justify-between mb-6">
                    <div>
                    <p class="text-sm text-indigo-600 font-semibold uppercase">Pick your path</p>
                    <h2 class="text-2xl md:text-3xl font-bold">Course tracks</h2>
                    <p class="text-slate-600 mt-1">Structured, practical programs with a tangible deliverable.</p>
                    </div>
                    <a href="contact.html" class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Talk to us</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courseTracks}
                </div>
            </section>

            <Deliverables />

           
           
            <CoursesActionCall />

            <Footer />
        </>
    )
}