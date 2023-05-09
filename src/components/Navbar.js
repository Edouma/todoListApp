const Navbar=()=>{
    return(
        <nav className="navbar">
        <h2>TodoApp...</h2>
            <div className="links">
            
                {/* <Link to="/">Home</Link>
                <Link to="/create">Add Item</Link> */}
                <a href="#"> Home</a>
                <a href="Todo.js"> Add New</a>
            </div>
    </nav>
    )
}

export default Navbar;