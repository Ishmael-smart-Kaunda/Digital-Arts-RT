import { useState } from "react"
import emailjs from 'emailjs-com';


export default function Form() {
    const [userCredentials, SetUserCredentials] = useState({
        user_name: "",
        email: "",
        phone: "",
        message: "",
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
                phone: userCredentials.phone,
                interest: userCredentials.interest,
                message: userCredentials.message
            } , 'HHvwTlVB99Dr-l6d_')
            .then(
                () => {
                console.log('SUCCESS!');
                alert("Your request has been submitted successfully.")
                SetUserCredentials({
                    user_name:"",
                    email:"",
                    phone:"",
                    message:"",
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
        <form id="contact-form" class="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={sendEmail}>
            <input 
                type="text"
                name="user_name" 
                placeholder="Full name" 
                className="p-3 border rounded-md border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none transition-colors duration-300"
                value={userCredentials.user_name}
                onChange={handleChange}
                required
            />
            <input 
                type="email"
                name="email" 
                placeholder="Email address" 
                className="p-3 border rounded-md border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none transition-colors duration-300"
                value={userCredentials.email}
                onChange={handleChange}
                required
            />
            <input 
                type="tel"
                name="phone" 
                placeholder="Phone" 
                className="p-3 border rounded-md border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none transition-colors duration-300"
                value={userCredentials.phone}
                onChange={handleChange}
                required
            />
            <select 
                name="interest" 
                className="p-3 border rounded-md border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none transition-colors duration-300"
                value={userCredentials.interest}
                onChange={handleChange}
                required
            >
                <option value="">I'm interested in...</option>
                <option>Student (cohort)</option>
                <option>Mentor / Teacher</option>
                <option>Volunteer</option>
            </select>
            <textarea 
                name="message" 
                placeholder="Message (tell us about your skills or interest)" 
                className="md:col-span-2 p-3 border rounded-md border-inputBorder rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none transition-colors duration-300"
                value={userCredentials.message}
                onChange={handleChange}
            >
            </textarea>
            <div className="md:col-span-2 flex gap-4">
                <button class="px-4 py-3 bg-indigo-600 text-white rounded-md">Send Application</button>
                <a href="index.html" className="px-4 py-3 border rounded-md border-borderColor text-primaryText transition-colors duration-300">Back</a>
            </div>
        </form>
    )
}