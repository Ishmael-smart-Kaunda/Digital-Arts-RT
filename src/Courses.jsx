
import Navigation from "./components/home page/Nav"
import CoursesHeader from "./courses header"
import FAQ from "./components/courses page/FAQ"
import CoursesActionCall from "./components/courses page/CallToAction"


import Quickfacts from "./components/courses page/Quickfacts"
import Coursetrack from "./components/courses page/Coursetrack"
import Data from './data/Trackdata'
import Deliverables from "./components/courses page/Deliverables"

export default function Courses() {

    const courseTracks = Data.map(track => {
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
            {/*Navigation */}
            <Navigation/>

            {/*Header */}
            <CoursesHeader/>
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

            {/**FAQ */}
            <FAQ/>

            <CoursesActionCall/>
        </>
    )
}