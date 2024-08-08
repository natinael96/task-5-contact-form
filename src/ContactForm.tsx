import React, { useState } from 'react';
import { set, SubmitHandler } from 'react-hook-form';
import InputForm from './InputForm';
import './ContactForm.css';
import DisplayData from './DisplayData';

interface FormValues {
    [key: string]: any;
}

const ContactForm: React.FC = () => {
    const [data, setData] = useState<FormValues >();
    const fields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email', value: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
        { name: 'message', label: 'Message', type: 'textarea', val: 10 }
    ];

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setData(data);
    };

    return (<div className='contact-form-container'>
        <InputForm fields={fields} onSubmit={onSubmit} />;
        <DisplayData data={data} />
    </div>) 
};

export default ContactForm;
