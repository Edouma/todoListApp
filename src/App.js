// import{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import {useState} from 'react';
import MyTodoList from './components/MyTodoList';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';


function App() {

  const [todo, setTodo]= useState("");
  const [todoList, setTodoList]= useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
          <Switch>
            <Route exact path="/">
                <MyTodoList setTodoList={setTodoList} todoList={todoList}/>
            </Route>

            <Route path="/TodoForm">
              <TodoForm 
              todo={todo} 
              setTodo={setTodo} 
              todoList={todoList} 
              setTodoList={setTodoList}
            />        
            </Route>
          </Switch>
          
       
          {/* <MyTodoList setTodoList={setTodoList} todoList={todoList}/> */}
        
          </div>
        
        
      </div>
    </Router>
  );
}

export default App;
