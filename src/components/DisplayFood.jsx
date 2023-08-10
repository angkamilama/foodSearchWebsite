import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';




  function DisplayFood() {
 
    const expectedState = useSelector(state => {
        console.log( state.food);
     })
  
    return(
        <div>
            fdsff
        </div>
    )
}

export default DisplayFood;