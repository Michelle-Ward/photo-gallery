import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropertyGallery from './components/PropertyGallery.jsx'
import styled from 'styled-components';

const PropertyGalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  /* position: relative;
  margin: auto; */
  height: 500px;
  overflow: hidden;
  min-height: 275px;
  border-radius: 8px;
  -webkit-box-pack: center;
  transition: 0.45s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;
  &:hover {
    transform-origin: center;
    transform: scale(1.025);
    /* transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transition-property: transform;
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s; */
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      photos: []
    }
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

  render() {
    if (this.state.properties.length > 0) {
      return (
        <PropertyGalleryDiv>
          <PropertyGallery photos={this.state.photos}/>
        </PropertyGalleryDiv>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}




ReactDOM.render(<App />, document.getElementById('app'));