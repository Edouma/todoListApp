import{useState} from 'react';
import Todo from './components/Todo';

const TodoList =()=>{
    const [todo, setTodo]= useState("");
    const [todoList, setTodoList]= useState([]);

    return(
    <div>
        <Todo 
        todo={todo} 
        setTodo={setTodo} 
        todoList={todoList} 
        setTodoList={setTodoList}/>
        
    </div>)

}

export default TodoList;