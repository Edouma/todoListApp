import Todo from "./Todo";

const MyTodoList = ({todoList, setTodoList})=>{
    return(
        <div>
            <h4> Todo list...</h4>
            <h4>{todoList.map((item)=>(
                <Todo key={item.id} item={item} todoList={todoList} setTodoList={setTodoList}/>
            ))}</h4>
        </div>
    )
}
export default MyTodoList;
