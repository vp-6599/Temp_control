import { useState } from "react";

const Counter =() =>{

    const [count, setCount] = useState(0)

    const increment =() =>{
        setCount(count+1)
    }

    const decrement =() =>{
        if(count > 0){
            setCount(count-1)
        }
    }
    return(
        <>
        <div className="bg-success w-50 mx-auto p-3 rounded-3 mt-5">
            <h1 className="text-primary">Counter Application</h1>
            <div className="btn-group">
                <button className="btn btn-danger" onClick={increment}>+</button>
                <button className="btn btn-primary">{count}</button>
                <button className="btn btn-danger" onClick={decrement}>-</button>
            </div>
        </div>
        </>
    )
}
export default Counter