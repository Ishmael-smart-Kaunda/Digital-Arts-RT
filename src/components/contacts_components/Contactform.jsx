



export default function ContactForm(){

     return(
             
              <main className="max-w-6xl bg-slate mx-auto px-6 py-12 pt-24">

                 <h1 className="text-3xl font-bold mb-6">Contact & Apply</h1>
                 <p classname="text-slate-600 mb-6">Use the form to register interest in teaching, mentoring, or joining the first cohort.</p>

                 <form id="contact-form" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input name="name" placeholder="Full name" className="p-3 border rounded-md"/>
                   <input name="email" placeholder="Email address" className="p-3 border rounded-md"/>
                   <input name="phone" placeholder="Phone (optional)" className="p-3 border rounded-md"/>
                   <select name="role" className="p-3 border rounded-md">
                       <option value="">I'm interested in...</option>
                       <option>Student (cohort)</option>
                       <option>Mentor / Teacher</option>
                       <option>Volunteer</option>
                  </select>
                 <textarea name="message" placeholder="Message (tell us about your skills or interest)" className="md:col-span-2 p-3 border rounded-md"></textarea>
                 <div className="md:col-span-2 flex gap-4">
                       <button class="px-4 py-3 bg-indigo-600 text-white rounded-md" type="submit">Send Application</button>
                       <a href="index.html" className="px-4 py-3 border rounded-md">Back</a>
                   </div>
                   </form>
               </main>
        
         
     )
 }
