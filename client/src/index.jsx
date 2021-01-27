import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import HomeGallery from './components/HomeGallery.jsx';
import HomeDetails from './components/HomeDetails.jsx';
import MultiGallery from './components/MultiGallery.jsx';

const HomeGalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  height: 500px;
  overflow: hidden;
  min-height: 275px;
  max-width: 100%;
  max-height: 100%;
`;

const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 992px;
  max-width: 75%;
  margin: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      photos: [],
      MultiGalleryOpen: false,
      selectedProperty: null,
    };
    this.toggleMultiGallery = this.toggleMultiGallery.bind(this);
    this.selectProperty = this.selectProperty.bind(this);
  }

  componentDidMount() {
    this.getProperties(() => {
      this.setState({ selectedProperty: this.state.properties[0] });
      this.getPhotos(this.state.selectedProperty.id);
    });
  }

  getProperties(callback) {
    axios.get('/api/properties').then((response) => {
      this.setState({ properties: response.data });
      callback();
    });
  }

  getPhotos(propertyId) {
    axios.get(`/api/photos/${propertyId}`).then((response) => {
      this.setState({ photos: response.data });
    });
  }

  toggleMultiGallery() {
    this.setState({ MultiGalleryOpen: !this.state.MultiGalleryOpen });
  }

  selectProperty(property) {
    this.setState({ selectedProperty: property });
    this.getPhotos(this.state.selectedProperty.id);
  }

  render() {
    if (this.state.photos.length > 0) {
      return (
        <BackgroundDiv>
          <HomeGalleryDiv onClick={() => this.toggleMultiGallery()}>
            <HomeGallery photos={this.state.photos} />
          </HomeGalleryDiv>
          <HomeDetails details={this.state.selectedProperty} />
          <MultiGallery
            photos={this.state.photos}
            multiGalleryOpen={this.state.MultiGalleryOpen}
            address={this.state.selectedProperty.address}
            cost={this.state.selectedProperty.cost}
            beds={this.state.selectedProperty.beds}
            baths={this.state.selectedProperty.baths}
            closeFunction={() => this.toggleMultiGallery()}
          />
        </BackgroundDiv>
      );
    }
    return (
      <div />
    );
  }
}

// badges:
// cost endswith digit ? FOR RENT : FOR SALE
// new: NEW
// new_construction: NEW CONSTRUCTION
// furnished: FURNISHED
// petfriendly: PET FRIENDLY
// icons: hover:Grey
//  Favorite: favorite === true ? fullHeart : emptyHeart
//  Share: Share icon
//  Images: Image icon with photos.length displayed

ReactDOM.render(<App />, document.getElementById('photo_gallery'));
