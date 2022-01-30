import React from 'react';

const ImageCard = props => {
  const { image, author } = props;

  return (
    <div>
      <img alt={`Pic by ${author}`} src={image} />
    </div>
  );
}

export default ImageCard;
