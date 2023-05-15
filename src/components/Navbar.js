import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar">
        <h2>TodoApp...</h2>
            <div className="links">
            
                <Link to="/">Home</Link>
                <Link to="/TodoForm">Add Item</Link>
                {/* <a href="/"> Home</a>
                <a href="/TodoForm"> Add New</a> */}
            </div>
    </nav>
    )
}

export default Navbar;