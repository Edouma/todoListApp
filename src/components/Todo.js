import { Button } from 'react-bootstrap';
const Todo =({item})=>{
    return(
        <div>
            <div className='todoItem'>
                <h4> {item}</h4>
                <Button variant="danger" type="submit"> done </Button>
            </div>

        </div>
    )
}
export default Todo;