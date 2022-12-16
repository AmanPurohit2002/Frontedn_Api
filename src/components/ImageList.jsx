import ImageShow from './ImageShow';
import '../css/ImageList.css';


const ImageList=({images1})=>{

    const renderedElement=images1.map((val)=>{
        return (
            <ImageShow key={images1.id} image={val}/>
        )
    })


    return (
        <div className='image-list'>
            <p>{images1.length}</p>
            <div>
                {renderedElement}
            </div>
            
        </div>
    )


}

export default ImageList;