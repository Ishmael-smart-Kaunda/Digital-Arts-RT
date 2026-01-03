
import Navigation from "./components/home page/Nav.jsx"
import Header from "./components/home page/Header.jsx"
import ActionCall from "./components/home page/ActionCall.jsx"


import Courses from "./components/home page/Courses"
import courseData from './data/Coursesdata.js'
import Showcase from "./components/home page/Showcase.jsx"
import Showcasedata from "./data/Showcasedata.js"
import Footer from "./components/home page/Footer.jsx"



function Home() {
  
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
        {/* Navigation */}
      <Navigation/>

       {/*Header */}
       <Header/>


      {/* Courses Section */}
      <section id="courses" class="max-w-6xl mx-auto px-5 py-16">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-bold">Core Courses</h3>
          <a href="courses.html" class="text-indigo-600 hover:underline">View all courses →</a>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseDetails}
        </div>
      </section>
      

      {/* Shocase Section */}
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
      <ActionCall/>
      <Footer />
      
    </>
  )
}


export default Home