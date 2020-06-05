import React, { useState, useEffect }  from 'react';

const ImageDetail = ({imageDisplay}) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`/get-image?id=${imageDisplay.id}`,).then(response => response.json()).then(data => {
      setDetails(data)
    })
  }, [imageDisplay]);

  console.log('ImageDetail', imageDisplay)
  if(!imageDisplay) {
    console.log(imageDisplay)
    return <div> Loading... </div>;
  }

  return(
    <div>
      <div className="ui embed">
        <img
        className="ui image"
        title="image player"
        src={`data:image/jpeg;base64,${imageDisplay.image_data}`}/>

      </div>
      <div className="ui segment">
        <h4 className="header">{details.description}</h4>
        <p className="header">{details.dateCreated}</p>
      </div>
    </div>
  );
}

export default ImageDetail;
