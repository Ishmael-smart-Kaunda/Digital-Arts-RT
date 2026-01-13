import Form from "./Form"



export default function ContactForm(){

    return(      
        <main className="max-w-6xl bg-slate mx-auto px-6 py-12 pt-24">
            <h1 className="text-3xl font-bold mb-6 text-primaryText">Contact & Apply</h1>
            <p className="text-slate-600 mb-6 w-auto py-10 text-xl text-secondaryText">Use the form to register interest in teaching, mentoring, or joining the first cohort.</p>
            <Form />
        </main>
    )
}
