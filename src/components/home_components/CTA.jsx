


export default function ActionCall(){

    return(
             <section className='w-full mx-auto px-5 py-12'>
                <div className='bg-gradient-to-r from-green-400 to-red-500 rounded-xl text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6'>
                <div>
                    <h3 className="text-2xl font-bold">Join the Founders & Mentors</h3>
                    <p className="mt-2 text-sm">We’re assembling a small founding team of creatives to run the pilot — mentors, instructors, and organizers welcome.</p>
                </div>
                  <div className="flex gap-4">
                    <a href="contact.html" className="px-4 py-3 bg-white/20 rounded-md hover:bg-white/30">Apply to Mentor</a>
                    <a href="#signup-form" className="px-4 py-3 bg-black/10 rounded-md hover:bg-black/20">Reserve seat</a>
                  </div>
                </div>
             </section>
    )
}

