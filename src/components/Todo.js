import { useState } from "react";

const Todo =()=>{

    const [todo, setTodo]=useState("");
    const [todoList, setTodoList]= useState([]);

    const handleChange =(event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        let temp = todoList;
        temp.push(todo);
        setTodoList(temp);
        console.log(todoList);
        setTodo("");
    }
    return(
        <div>
            <h1> Todo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange}/>
                <button type="submit">Add List</button>
            </form>
            {todoList.map((item)=>(
                <h3>{item}</h3>
            ))}
        </div>
    )
}
export default Todo;