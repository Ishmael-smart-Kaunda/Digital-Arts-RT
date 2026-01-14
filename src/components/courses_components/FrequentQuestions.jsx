import Questions from "./common_questions"
import questionsData from "../../data/questions-data"

export default function FAQuestions(){
       const commonQuestions=questionsData.map(question=>{
                    return<Questions key={question.id} data={question}/>
                    })
    
    return(
              <>
                 <section className=" max-w-6xl mx-auto px-6 pb-12">
                     <div className="bg-bgPrimaryForm rounded-2xl shadow card-shadow border border-borderColor p-6 ">
                       <div className="flex items-center justify-between flex-wrap gap-3">
                         <div>
                            <p className="text-sm text-indigo-600 font-semibold uppercase">FAQ</p>
                            <h3 className="text-2xl text-primaryText font-bold">Common questions</h3>
                         </div>
                            <a href="contact.html" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Ask something else</a>
                       </div>

                       <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                         {commonQuestions}
                     </div>
                  </div>
                </section>
              </>
       )
}