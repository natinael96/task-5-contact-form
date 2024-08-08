import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
    [key: string]: any;
}

interface FormField {
    name: string;
    label?: string;
    message?: string;
    type: string;
    value?: string;
    val?: number;
}

interface InputFormProps {
    fields: FormField[];
    onSubmit: SubmitHandler<FormValues>;
}

const InputForm: React.FC<InputFormProps> = ({ fields, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            {fields.map((field) => (
                <div key={field.name} className="form-group">
                    <label htmlFor={field.name}>{field.label || field.name}</label>
                    {field.type === 'textarea' ? (
                        <textarea
                            id={field.name}
                            {...register(field.name, {
                                required: `${field.label || field.name} is required`,
                                minLength: { value: 10, message: `${field.label || field.name} must be at least 10 characters` },
                                pattern: field.value ? {
                                    value: new RegExp(field.value),
                                    message: `Invalid ${field.label || field.name}`
                                } : undefined
                            })}
                        />
                    ) : (
                        <input
                            id={field.name}
                            type={field.type}
                            {...register(field.name, {
                                required: `${field.label || field.name} is required`,
                                pattern: field.value ? {
                                    value: new RegExp(field.value),
                                    message: `Invalid ${field.label || field.name}`
                                } : undefined
                            })}
                        />
                    )}
                    {errors[field.name] && <p className="error-message">{errors[field.name]?.message as string}</p>}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;
