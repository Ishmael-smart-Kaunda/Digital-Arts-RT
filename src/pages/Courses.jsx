import Header from "../components/Header"
import headerData from "../data/headerData"
import Coursetrack from "../components/courses_components/Coursetrack"
import Coursetrackdata from "../data/Trackdata"
import Quickfacts from "../components/courses_components/Quickfacts"
import Deliverables from "../components/courses_components/Deliverables"

{/*import FAQ from "../components/courses_components/FAQ"*/}
import FAQuestions from "../components/courses_components/frequent_questions"

import CallAction from "../components/CallAction"
import Footer from "../components/Footer"


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
        <div className="bg-bgPrimary">
            <Header pageNmae='course' data={headerData} />

            <Quickfacts />

            <section id="tracks" className="max-w-6xl mx-auto px-6 pb-6 bg-bgPrimary">
                <div className="flex items-center justify-between mb-6">
                    <div>
                    <p className="text-sm text-indigo-600 font-semibold uppercase">Pick your path</p>
                    <h2 className="text-2xl text-primaryText md:text-3xl font-bold">Course tracks</h2>
                    <p className="text-secondaryText mt-1">Structured, practical programs with a tangible deliverable.</p>
                    </div>
                    <a href="contact.html" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Talk to us</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courseTracks}
                </div>
            </section>

            <Deliverables />
           
            <FAQuestions/> 
            
           

            <section class="w-full px-6 py-12">
                <CallAction pageName='course' />
             </section>

            <Footer />
        </div>
    )
}