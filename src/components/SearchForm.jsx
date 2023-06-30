import React from 'react'
import { useState , useEffect } from 'react';

const  SearchForm = ({onSearch}) => {

    const [searchStr , setSearchStr]=useState("");
    const [searchOption , setSearchOption] = useState('shows');


    console.log('component rendere')

   useEffect(() => {
    console.log('search option changes' , searchOption)
   },[ searchOption])





    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value)
      }
      
    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    }
    const onSubmit = ev => {
        ev.preventDefault();

        const options = {
            q : searchStr,
            searchOption
        }

        onSearch(options);
    }

  return (
    <form  onSubmit={onSubmit}>
    <input type='text'  value={searchStr} onChange={onSearchInputChange}/>
    <label>
    <input type='radio' 
    name="search-option" 
    value="actress" 
    onChange={onRadioChange} 
    checked={ searchOption === 'actress'}/>
    Actor
    </label>

    <label>
    <input type='radio' 
    name="search-option"  
    value="shows" 
    onChange={onRadioChange} 
    checked={searchOption   === 'shows'}/>
    Movie
    </label>
    
     <button type='submit'>
     Search
    </button>
    </form> 
  )
}

export default SearchForm ;



