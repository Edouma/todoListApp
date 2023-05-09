import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>

        <div className="content">

          <Todo/>
          
        </div>
      
      
    </div>
  );
}

export default App;
