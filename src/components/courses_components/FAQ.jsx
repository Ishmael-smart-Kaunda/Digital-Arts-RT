

import Questions from "../components/courses_components/commonQuestion"
import questionsData from './data/FAQdata.js'

export default function FAQ(){
       const commonQuestions=questionsData.map(question=>{
             return<Questions key={question.id} data={question.data}/>
       })
       return(
              <>
                 <section class=" max-w-6x w-full mx-auto px-6 pb-12">
                     <div class="bg-white rounded-2xl shadow card-shadow border border-slate-500 p-6">
                       <div class="flex items-center justify-between flex-wrap gap-3">
                         <div>
                            <p class="text-sm text-indigo-600 font-semibold uppercase">FAQ</p>
                            <h3 class="text-2xl font-bold">Common questions</h3>
                         </div>
                            <a href="contact.html" class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Ask something else</a>
                       </div>

                       <div class="mt-6 grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                         {commonQuestions}
                     </div>
                  </div>
                </section>
              
              </>
       )
}