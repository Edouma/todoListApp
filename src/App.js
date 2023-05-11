// import{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import {useState} from 'react';
import MyTodoList from './components/MyTodoList';


function App() {

  const [todo, setTodo]= useState("");
  const [todoList, setTodoList]= useState([]);

  return (
    <div className="App">
      <Navbar/>

        <div className="content">

         
       <TodoForm 
          todo={todo} 
          setTodo={setTodo} 
          todoList={todoList} 
          setTodoList={setTodoList}
        />
        <MyTodoList todoList={todoList}/>
        </div>
      
      
    </div>
  );
}

export default App;
