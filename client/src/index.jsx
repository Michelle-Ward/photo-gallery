import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HomeGallery from './components/HomeGallery.jsx'
import HomeDetails from './components/HomeDetails.jsx'
import styled from 'styled-components';

const HomeGalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  height: 500px;
  overflow: hidden;
  min-height: 275px;
  -webkit-box-pack: center;
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
        <div>
          <HomeGalleryDiv>
            <HomeGallery photos={this.state.photos}/>
          </HomeGalleryDiv>
          <HomeDetails details={this.state.properties[0]}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}




ReactDOM.render(<App />, document.getElementById('app'));