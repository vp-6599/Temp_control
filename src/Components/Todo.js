import { useState } from "react"

const Todo = () =>{
    
    const [input, setInput] = useState('')        //it manage the state of input field
    const [todo, setTodo] = useState([])          //it manage the state of array
    const [editdata, setEditdata] = useState(null)
    
    //spread operator
    const addData=() =>{
        if(editdata !== null){
            const xyz = [...todo]
            xyz[editdata] = input
            setTodo(xyz)
            setEditdata(null)
        }else if(input.trim() === ''){
            alert('Enter Valid Data')
        }else{
            setTodo([...todo, input])
            setInput('')
        }
        setInput('')
    }

    const deleteData = (index) => {
        const newTodo = [...todo]
        newTodo.splice(index,1)
        setTodo(newTodo)
    }

    // call index data in input field
    const editData = (index) =>{
        setInput(todo[index])
        setEditdata(index)
    }

    return(
        <div className="bg-dark w-50 mx-auto mt-5 rounded-5 p-4">
            <h2 className="text-warning">To Do App</h2>
            <input
            type='text'
            className="w-50 p-2 rounded-4 fw-bold fs-3"
            placeholder="Enter Your Todo Data"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <br/>
            <button className="btn btn-success p-3 mt-2" onClick={addData}>Add Data</button>

            <table className="text-light table mt-3">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>List item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       todo.map((data, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1 }</td>
                                <td>{data}</td>
                                <td>
                                    <button className="btn btn-warning"onClick={()=>editData(index)} >Edit</button>
                                    <button className="btn btn-danger" onClick={()=>deleteData(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Todo