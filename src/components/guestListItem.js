import React, { useState } from 'react'

const  GuestListItem = (props) => {

    const [count, setCount] =useState(0)


    const countHandle = (e) => {

        const {name} = e.target
        if(name==="increment")
        {
            setCount(prevValue => prevValue += 1)
        }
        else{
            setCount(prevValue => prevValue -= 1)
        }

        e.preventDefault();
    }

 console.log(typeof count)



    return (

        <div className="guest-list__item">

        <label className="guest-list__item--label">{props.label}</label>
        <p className="guest-list__item--helper">{props.helper}</p>
        <button className="guest-list__item--decrement" name="decrement" onClick={(e)=> countHandle(e)}>-</button>  
        <input className="guest-list__item--input" type="number" onChange={(e)=> (setCount(parseInt(e.target.value)))} value={count}/>
        <button className="guest-list__item--increment" name="increment" onClick={(e)=> countHandle(e) }>+</button>
      
        </div> 

    )
}

export default GuestListItem
