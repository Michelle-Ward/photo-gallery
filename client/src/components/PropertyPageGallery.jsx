import React from 'react';
import PropertyPageGalleryImage from './PropertyPageGalleryImage.jsx'

const PropertyPageGallery = (props) => (
  <div className="PropertyPageGallery">
    {props.photos.slice(0,3).map(photo =>
      <PropertyPageGalleryImage photo={photo}/>
    )}
  </div>
);

export default PropertyPageGallery;