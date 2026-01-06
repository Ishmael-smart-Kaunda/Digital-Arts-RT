import courseData from '../data/Coursesdata.js'
import Courses from '../components/home_components/Courses'
import Showcase from '../components/home_components/Showcase.jsx'
import Showcasedata from '../data/Showcasedata.js'
import Footer from '../components/Footer.jsx'
import ActionCall from '../components/home_components/CTA.jsx'

import Header from '../components/home_components/Header.jsx'
export default function Home() {

    const courseDetails = courseData.map(data => {
        return <Courses 
            key={data.id}
            data = {data}
        />
    })

    const showCases = Showcasedata.map(data => {
        return <Showcase 
        key={data.id}
        data = {data}
        />
    })


    return (
        <>  
            <Header/>
            <section id="courses" class="max-w-6xl mx-auto px-5 py-16">
                <div class="flex items-center justify-between mb-8">
                <h3 class="text-2xl font-bold">Core Courses</h3>
                <a href="courses.html" class="text-indigo-600 hover:underline">View all courses →</a>
                </div>
        
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courseDetails}
                </div>
            </section>


            <section id="showcase" class="bg-slate-50 py-16">
                <div class="max-w-6xl mx-auto px-5">
                <div class="flex items-center justify-between mb-8">
                    <h3 class="text-2xl font-bold">Student Showcase</h3>
                    <a href="#" class="text-indigo-600">Submit your work</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {showCases}
                </div>
                </div>
            </section>

            <ActionCall />

            <Footer />
        </>
    )
}