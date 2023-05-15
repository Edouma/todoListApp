import { Button } from 'react-bootstrap';
const Todo =({item, todoList, setTodoList})=>{
    const deleteTodo =()=>{
        setTodoList(todoList.filter((todo)=>todo.id !== item.id));
    }
    return(
        <div>
            <div className='todoItem'>
                <h4> {item.name}</h4>
                <Button onClick={deleteTodo}variant="danger" type="submit"> done </Button>
            </div>

        </div>
    )
}
export default Todo;