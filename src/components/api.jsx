const fetchData=async(term)=>{
    const response=await fetch('https://api.unsplash.com/search/photos?'+new URLSearchParams({
        query:term
    }).toString(),{
        method:'GET',
        headers:{
            Authorization: 'Client-ID zniY3XYEmc9n3EpignuGOWA4ZxFFeUtUXS5vIIMukPU'
        } 
        //post request 
        // body:JSON.stringify({
        //     query:'cars'
        // })
    })

    const json=await response.json(); //return the whole body  of http response

    const data=json.results;

    // console.log(json);
    
    console.log(data);

    return data;
}




export default fetchData; 