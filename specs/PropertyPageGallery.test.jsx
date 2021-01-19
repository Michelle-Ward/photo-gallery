import React from 'react';
import { shallow, mount, render } from 'enzyme';

import PropertyPageGallery from '../client/src/components/PropertyPageGallery.jsx';
import PropertyPageGalleryImage from '../client/src/components/PropertyPageGalleryImage.jsx';


const wrapper = mount(<PropertyPageGallery photos={['a', 'b', 'c']}/>);
console.log(wrapper.debug());
expect(wrapper.find(PropertyPageGalleryImage)).toHaveProp('photo');

