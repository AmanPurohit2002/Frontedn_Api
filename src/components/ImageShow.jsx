const ImageShow=({image})=>{
    return (
        <div>
            <img alt ={image.alt_description} key={image.id} src={image.urls.small}/>
        </div>
    )
}

export default ImageShow;