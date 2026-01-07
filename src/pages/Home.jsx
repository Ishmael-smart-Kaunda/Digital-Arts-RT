import courseData from '../data/Coursesdata.js'
import Courses from '../components/home_components/Courses'
import Showcase from '../components/home_components/Showcase.jsx'
import Showcasedata from '../data/Showcasedata.js'
import Footer from '../components/Footer.jsx'


import CallAction from '../components/CallAction.jsx'

import Header from '../components/Header.jsx'
import headerData from '../data/headerData.js'
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
            <Header pageNmae='home' data={headerData}/>
            <section id="courses" className="max-w-6xl mx-auto px-5 py-16">
                <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Core Courses</h3>
                <a href="courses.html" className="text-indigo-600 hover:underline">View all courses →</a>
                </div>
        
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courseDetails}
                </div>
            </section>


            <section id="showcase" className="bg-slate-50 py-16">
                <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold">Student Showcase</h3>
                    <a href="#" class="text-indigo-600">Submit your work</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {showCases}
                </div>
                </div>
            </section>

            <CallAction pageName='home' />

            <Footer />
        </>
    )
}