import { useState } from "react";
import '../css/SearchBar.css';


const SearchBar=({onSubmit1})=>{
    const [term,setTerm]=useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();

        onSubmit1(term);
    }
    const handleChange=(e)=>{
        // setTerm(e.target.value.replace(/[a-zA-Z]/,'')); //can eneter one;y number 
        setTerm(e.target.value);
    }

    return (
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
            <label>Enter Search Term</label>
            <input type ="text"  value={term} onChange={handleChange}/>
            {term.length <5 && 'text is too small'}
        </form>
            
            
        </div>
    )
}

export default SearchBar;