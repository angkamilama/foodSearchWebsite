import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';




  function DisplayFood() {
 
    const expectedState = useSelector(state => {
        const Items = state.food.Items;
        console.log(Items);
        return Items;
     })
  
    return(
        <div>
            {expectedState.map(item => {
                return (
                    <div key={item.idMeal}>
                        <p>{item.strMeal}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayFood;