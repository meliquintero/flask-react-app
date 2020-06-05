import React, { useState, useEffect }  from 'react';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/get-images').then(response => response.json()).then(data => {
      setImages(data.images)
      setSelectedImage(data.images[0])
    })
  }, []);

  useEffect(() => {
  }, [selectedImage]);

  const onImageSelect = (imageId) => {
    let selected = images.find((element) => {
      return element.id === imageId;
    });
    setSelectedImage(selected)
  }

  return (

    <div className="ui container">
      <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            { selectedImage &&
              <ImageDetail imageDisplay={selectedImage}/>
            }
            </div>
            <div className="five wide column">
            { images &&
              <ImageList
                images={images}
                onImageSelect={onImageSelect}/>
            }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
