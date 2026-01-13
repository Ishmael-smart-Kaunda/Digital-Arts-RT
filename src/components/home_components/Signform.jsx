import { useState } from "react"
import emailjs from 'emailjs-com';



export default function Headerform() {
    const [userCredentials, SetUserCredentials] = useState({
        user_name: "",
        email: "",
        interest: ""
    })

    function handleChange(e) {
        const {name, value} = e.target

        SetUserCredentials(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const sendEmail = (e) => {
                e.preventDefault();
                console.log(userCredentials)
    
                emailjs
                .send('service_eur6dqk', 'template_kvkpu2r',{
                    user_name: userCredentials.user_name,
                    email: userCredentials.email,
                    interest: userCredentials.interest,
                } , 'HHvwTlVB99Dr-l6d_')
                .then(
                    () => {
                    console.log('SUCCESS!');
                    alert("Your request has been submitted successfully.")
                    SetUserCredentials({
                        user_name:"",
                        email:"",
                        interest: ""
                    })
                    },
                    (error) => {
                    console.log('FAILED...', error.text);
                    alert("Error submitting your request.")
                    },
                );
            };

    return(
        <form id="signup-form" className="mt-4 space-y-3 " onSubmit={sendEmail}>
            <input 
                type="text"
                name="user_name" 
                placeholder="Your full name"  
                value={userCredentials.user_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none"
            />
            <input 
                type="email"
                name="email" 
                placeholder="Email address" 
                value={userCredentials.email}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 rounded-md border border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none"
            />
          
            <select 
                name="interest"
                value={userCredentials.interest}
                onChange={handleChange}
                required
                className="text-[1rem] w-full max-w-full overflow-hidden px-3 py-2 rounded-md border border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none"
            >
                <option value="" className="border border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none" >I'm interested in...</option>
                <option className="">Digital drawing</option>
                <option   >3D modelling (Blender)</option>
                <option>Game dev (Godot/Unreal)</option>
            </select>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md">Reserve seat</button>
            <p className="text-xs text-slate-400 mt-1">We respect your privacy — no spam.</p>
        </form>
    )
}