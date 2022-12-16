import { useState } from 'react';

import SearchBar from './components/SearchBar';
import fetchData from './components/api';
import ImageList from './components/ImageList';

const App=()=>{

    const [images,setImages]=useState([]);

    const handleSubmit= async (term)=>{
        // console.log("hey i m here",term);
        const result=await fetchData(term);

        // console.log(result);
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit1={handleSubmit} /> 
            {/* passing onSubmit as props to make communication down to top also in componenents */}
            <ImageList images1={images}/>
        </div>
    )
    
}

export default App;