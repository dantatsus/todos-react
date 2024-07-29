import {useState} from 'react' 

const initialFormState = {todo: ""}

function Form( {addTodos, todos} ) {
    const [form,setForm] = useState(initialFormState)

    const onChangeSubmit = (e) => {
        setForm({[e.target.name]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === ""){return false;}
        
        addTodos([... todos, form.todo])
        console.log(form.todo);
        setForm(initialFormState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div id='input_container'>
            <input 
                name='todo'
                className="form-control form-control-lg" 
                placeholder="What needs to be done?" 
                aria-label=".form-control-lg example" 
                id='textInput'
                value={form.todo}
                onChange={onChangeSubmit}
                ></input>
            </div>
        </form>
  )
}

export default Form

