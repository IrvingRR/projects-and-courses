import { useState } from "react";

export const useForm = (initialValues) => {

    const [form, setForm] = useState(initialValues);

    const onInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const onResetForm = (e) => {
        e.preventDefault();
        setForm(initialValues);
    }

    return {
        ...form,
        form,
        onInputChange,
        onResetForm
    };

};