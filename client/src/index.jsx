import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HomeGallery from './components/HomeGallery.jsx'
import HomeDetails from './components/HomeDetails.jsx'
import MultiGallery from './components/MultiGallery.jsx'
import styled from 'styled-components';

const HomeGalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  height: 500px;
  overflow: hidden;
  min-height: 275px;
  width: 75%;
  margin:auto;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      photos: [],
      zMultiGallery: -1
    }
    this.toggleMultiGallery = this.toggleMultiGallery.bind(this);
  }

  componentDidMount() {
    this.getProperties(() => {this.getPhotos(this.state.properties[0].id)});
  }

  getProperties(callback) {
    axios.get('http://localhost:3000/api/properties').then(response => {
      console.log(response.data);
      this.setState({properties: response.data});
      callback();
    });
  }

  getPhotos(propertyId) {
    axios.get(`http://localhost:3000/api/photos/${propertyId}`).then(response => {
      console.log(response.data);
      this.setState({photos: response.data});
    });
  }

  toggleMultiGallery() {
    this.setState({zMultiGallery: this.state.zMultiGallery * -1});
    console.log(this.state.zMultiGallery);
  }

  render() {
    if (this.state.photos.length > 0) {
      return (
        <div>
          <HomeGalleryDiv onClick={() => this.toggleMultiGallery()}>
            <HomeGallery photos={this.state.photos}/>
          </HomeGalleryDiv>
          <HomeDetails details={this.state.properties[0]}/>
          <MultiGallery zIndex={this.state.zMultiGallery}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
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

ReactDOM.render(<App />, document.getElementById('app'));
