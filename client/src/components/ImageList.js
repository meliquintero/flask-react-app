import React from 'react';

import './ImageList.css';

const ImageList = ({images, onImageSelect}) => {
  const imageList = images.map(image => {
    return(
      <div className="image-item item" onClick={() => onImageSelect(image.id)}>
        <img
          className="ui image"
          src={`data:image/jpeg;base64,${image.image_data}`}
          alt={image.id}/>
      </div>
    );
  })

  return(
    <div className="ui relaxed divided list">
      { imageList }
    </div>
  )
}

export default ImageList;
