import { useState } from 'react'
import './IncDec.css'

export default function IncDec(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(function(prevCount){
            return (prevCount += 1);
        })
    }

    function decrement(){
        setCount(function(prevCount){
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else{
                return (prevCount = 0);
            }
        })
    }

    function reset(){
        setCount(function(prevCount){
            return (prevCount = 0);
        })
    }


    
    return(
        <div className='container'>
            <div className='main-inc'>
            <div>
                <h1>{count}</h1>
            </div>
            
            <div className='btn-inc'>
                <button className='btn-sub btn-main' onClick={decrement}>Decrement</button>
                <button className='btn-main' onClick={increment}>Increment</button>
            </div>
            <div>
                <button className='btn-main' onClick={reset}>Reset</button>
            </div>
        </div>
        </div>
    )
}