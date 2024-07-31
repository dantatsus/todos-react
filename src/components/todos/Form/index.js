import React, { useState } from 'react';
import { addItem } from '../../../api'; 

const initialFormState = { description: "", completed: false };

function Form({ addTodo }) {
    const [form, setForm] = useState(initialFormState);

    const onChangeSubmit = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (form.description === "") { return false; }

        try {
            const response = await addItem(form);
            addTodo(response.data);
        } catch (error) {
            console.error("There was an error adding the item!", error);
        }
        setForm(initialFormState);
    };

    return (
        <form onSubmit={onSubmit}>
            <div id='input_container'>
                <input
                    name='description'
                    className="form-control form-control-lg"
                    placeholder="What needs to be done?"
                    aria-label=".form-control-lg example"
                    id='textInput'
                    value={form.description}
                    onChange={onChangeSubmit}
                />
            </div>
        </form>
    );
}

export default Form;