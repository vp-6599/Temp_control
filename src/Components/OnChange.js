import { useState } from "react"

const Onchange = () => {

    const[name,setname] = useState({
        fname : '',
        lname : ''
    })

    const firstname =(e) =>{
        setname({
            ...name,fname : e.target.value
        })
    }
    const lastname =(e) =>{
        setname({
            ...name, lname : e.target.value
        })
    }
  return(
    <>
    <h1>Learn onChange event</h1>
    <div className="bs-dark w-50 mx-auto p-4 rounded-3">
        <input
        type="text"
        className="form-control"
        placeholder="Enter First Name"
        name="fname"
        value={name.fname}
        onChange={firstname}
        />
        <br/>
        <input
        type="text"
        className="form-control"
        placeholder="Enter Last Name"
        name="lname"
        value={name.lname}
        onChange={lastname}
        />
    </div>

    <div className="bg-success w-50 mx-auto mt-3 rounded-3 p-3">
        <h2>Your Name</h2>
        <h3 className="text-light">{name.fname}{name.lname}</h3>
    </div>
    </>
  )
}
export default Onchange