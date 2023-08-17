import React from 'react'
import { useSelector } from 'react-redux';




function DisplayFood() {

    const expectedState = useSelector(state => {
        return state.food;
    })

    return (
        <div>
            {expectedState}
        </div>
    )
}

export default DisplayFood;