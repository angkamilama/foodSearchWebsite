import React, { useState, useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { addFood } from '../slices/SearchFoodSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SearchFood() {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


 useEffect(()=> {
  axios.get(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${searchWord}`).then(response => dispatch(addFood(response.data.meals))
  );
}, [searchWord])

const handleSubmit = () => {
  navigate('/foodItems')
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
              Type an alphabet for the food list:
                <input type='text' value={searchWord} onChange={(e) =>   setSearchWord(e.target.value)}/>
            </label>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchFood;