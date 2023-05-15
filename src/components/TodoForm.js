// import { useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import shortid from 'shortid';

const TodoForm =({todo, setTodo, todoList, setTodoList})=>{

    // const [todo, setTodo]=useState("");
    // const [todoList, setTodoList]= useState([]);

    const handleChange =(event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit =(event)=>{
      event.preventDefault();
      setTodoList([...todoList, {name:todo, id:shortid.generate()}]);
      console.log(todoList);
      setTodo("");
    }

    // const handleSubmit=(event)=>{
    //     event.preventDefault();
    //     let temp = todoList;
    //     temp.push(todo);
    //     setTodoList(temp);
    //     console.log(todoList);
    //     setTodo("");
    // }
    return(
        <div>
            {/* <h1> Todo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange}/>
                <button type="submit">Add List</button>
            </form>
            {todoList.map((item)=>(
                <h3>{item}</h3>
            ))} */}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add Item:</Form.Label>
        <Form.Control value={todo} type="text" placeholder="Add Item..." onChange={handleChange}/>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Add Todo Item:</Form.Label>
        <Form.Control as="textarea" placeholder="Add Todo Item..." rows={3}/>
      </Form.Group> */}
      <Button variant="primary" type="submit">
        add Item
      </Button>
    </Form>

        </div>
    )
}
export default TodoForm;


