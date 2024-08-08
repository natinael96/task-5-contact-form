import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import InputForm from './InputForm';
import './ContactForm.css';

interface FormValues {
    [key: string]: any;
}

const ContactForm: React.FC = () => {

    const fields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email', value: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
        { name: 'message', label: 'Message', type: 'textarea', val: 10 }
    ];

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (<div className='contact-form-container'>
        <InputForm fields={fields} onSubmit={onSubmit} />;
    </div>) 
};

export default ContactForm;
