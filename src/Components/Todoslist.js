import { useState } from "react"

const Todoslist = () => {

    const [todos, setTodos] = useState([])       //to add data in array
    const [input, setInput] = useState(        // to handle the input field
        {
            item :'',
            itemDescription :'',
            date :'',
            time :''
        }
    )

    // to access object properties - objectName.propertyName     i.e. input.item
    const [editdata,setEdittodo] = useState(null)

    const handleInputs = (e) => {               // to make changes in form input
        const{name, value} = e.target
        setInput((prevInput)=>({
            ...prevInput, [name] : value
        }))
    }

    const addData = () => {                     //to add data in array
        if(input.item && input.itemDescription && input.date && input.time){
          setTodos(
            prevTodos => [
                ...prevTodos, {item : input.item, itemDescription : input.itemDescription, 
                              date : input.date, time : input.time} //to access object properties- objectName.propertyName
            ]
          )
        }else{
              alert('Enter Both Values')
        }
        setInput({item : '', itemDescription : '', date : '', time : ''})
    }

    const deleteData = (index)=>{
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    // call index data in input field
    const editData = (index) =>{
        setTodos(input[index])
        setEdittodo(index)
    }
    return(
        <div className="bg-warning w-50 mx-auto mt-5 rounded-3 p-4">
            <h2>Todo App</h2>
            <input
            type="text"
            className="form-control"
            onChange={handleInputs}
            name="item"
            value={input.item}
            placeholder="Enter your Item"
            />
          <br/>
          <input
            type="text"
            className="form-control"
            onChange={handleInputs}
            name="itemDescription"
            value={input.itemDescription}
            placeholder="Enter your Item Description"
            />
            <br/>
            <input
            type="date"
            className="form-control"
            onChange={handleInputs}
            name="date"
            value={input.date}
            />
           <br/>
           <input
            type="time"
            className="form-control"
            onChange={handleInputs}
            name="time"
            value={input.time}
            />
            <br/>
           <button className="btn btn-success" onClick={addData}>ADD DATA</button>

           <table className="table mt-3">
            <thead>
                <tr>
                    <th>SR NO</th>
                    <th>Item List</th>
                    <th>Item Description</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((data,index)=>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.item}</td>
                                <td>{data.itemDescription}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>deleteData(index)}>Delete</button>
                                    <button className="btn btn-success" onClick={()=>editData(index)}>Edit</button>
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
export default Todoslist