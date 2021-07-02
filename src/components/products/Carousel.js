import { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function Carousel(props) {
    const [images, setImages] = useState(props?.images);

    useEffect(()=>{
    let shouldCancel = false;

    const call = (images) => {
      
      if (!shouldCancel && images && images.length > 0) {
         setImages(
          images.map(url => ({
            original: `${url}`,
            thumbnail: `${url}`
          }))
        );
      }
    };
    call(props?.images);
    return () => (shouldCancel = true);
    },[setImages,props?.images])

    return(
        <>
            {images?.length >0 
            ?<ImageGallery items={images} showNav={false} showPlayButton={false}/>
            :""}
        </>
    );
};