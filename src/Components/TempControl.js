
import { useState } from 'react'
import './TempControl.css'

const TempControl = () => {

    const [temp, setTemp] = useState(0)
    const [color,updateColor] = useState('cold')

    const increment = () =>{
        setTemp(temp + 1)
        // codition ? true  : False
        temp >= 30 ? updateColor('hot') : updateColor('cold')
    }

    const decrement = () =>{
        setTemp(temp - 1)
        // codition ? true  : False
        temp >= 30 ? updateColor('cold') : updateColor('hot')
    }

    return(
    <div className='mainblock'>
        <h2>Temp Control App</h2>

        <div className={`temp-display ${color}`}>
             {temp}&#176;C 
        </div>

        <div className='tempmsg fs-4'>
            {
                temp >= 30 ? <p>Its too hot &#128560;</p> :
                <p>Its Normal Temp &#128512;</p>
            }
        </div>

        <div className='mt-5'>
            <button onClick={increment} className='btn btn-success fs-2 p-3 w-25 me-2'>+</button>
            <button onClick={decrement} className='btn btn-danger fs-2 p-3 w-25'>-</button>
        </div>

    </div>
    )
}
export default TempControl