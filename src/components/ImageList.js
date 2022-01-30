import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import ImageCardDetails from './ImageCardDetails';

const ImageList = props => {
  const { endpointImagesAndDetails } = props.images;

  const images = endpointImagesAndDetails.map(image => {
    return (
      <div className="image-card-container" key={image.id}>
        <ImageCard
          author={image.author}
          dek={image.dek}
          hed={image.hed}
          id={image.id}
          image={image.image}
        />
        <ImageCardDetails 
          author={image.author}
          dek={image.dek}
          hed={image.hed}
          id={image.id}
          url={image.url}
        />
      </div>
    )
  });

  return <div className="image-list-container">{images}</div>;
};

export default ImageList;
