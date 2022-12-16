import ImageShow from './ImageShow';

const ImageList=({images1})=>{

    const renderedElement=images1.map((val)=>{
        return (
            <ImageShow image={val}/>
        )
    })


    return (
        <div>
            <p>{images1.length}</p>
            <div>
                {renderedElement}
            </div>
            
        </div>
    )


}

export default ImageList;