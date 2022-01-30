import React from 'react';

const ImageCardDetails = props => {
  const { author, dek, hed, id, url } = props;

  return (
    <div className="details-card-container">
      <h3>{dek}</h3>
      <h5>{hed}</h5>
      <hr />
      <div className="profile-details-container">
        <div className="profile-entry">
          <p>Author</p>
          <p>ID</p>
          <p>URL</p>
        </div>
        <div className="profile-details">
          <p><span className="details">{author}</span></p>
          <p><span className="details">{id}</span></p>
          <p><span className="details">{url}</span></p>
        </div>
      </div>
    </div>
  );
}

export default ImageCardDetails;
