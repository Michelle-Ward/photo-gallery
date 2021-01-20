import React from 'react';

const PropertyPageGalleryImage = (props) => (
  <div className="PropertyPageGalleryImage">
    <img src={`${props.photo.link}`}></img>
  </div>
);


export default PropertyPageGalleryImage;
