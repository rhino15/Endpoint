import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import ImageCardDetails from './ImageCardDetails';

const ImageList = props => {
  console.log(props)
  const { images } = props;
  const imageCards = images ? images.map(image => {
    return (
      <div className="image-card-container" key={image.id}>
        <ImageCard
          author={image.author}
          image={image.download_url}
        />
        <ImageCardDetails 
          author={image.author}
          dek="Lorum Ipsom"
          hed="Lorum Ipsom"
          id={image.id}
          url="https://endpointclosing.com"
        />
      </div>
    );
  }) : null;

  return <div className="image-list-container">{imageCards}</div>;
};

export default ImageList;
