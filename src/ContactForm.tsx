import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<FormValues>()
    const [data, setData] = useState<FormValues | null>(null);

    const onSubmit = (data: FormValues) => {
        setData(data);
    }


return (
    <div className="contact-form-container">
    
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name" 
                {...register( "name", {
                        required: "Name is required", 
                        maxLength: {
                                value: 20, 
                                message: "Name is too long"
                        }}
                )}
                />
                {errors.name && <p className="error-message">{errors.name?.message}</p>}
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                {...register("email", {
                        required: "Email is required",
                        pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                        }
                })} 
                />
                {errors.email && <p className="error-message">{errors.email?.message}</p>}

        </div>


        <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
                id="message" 
                {...register("message", {
                        required: "Message is required",
                        minLength: {
                                value: 10,
                                message: "Message is too short"
                        }
                })} 
                />
                {errors.message && <p className="error-message">{errors.message?.message}</p>}
        </div>
        
        <button type="submit">Send</button>
        </form>

            {data && !errors.message && (
                <div className="data-display">
                    <h2>Submitted Data:</h2>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Message:</strong> {data.message}</p>
                </div>
                )}       

    </div>
);
};

export default ContactForm;