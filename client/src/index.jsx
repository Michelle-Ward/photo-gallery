import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropertyPageGallery from './components/PropertyPageGallery.jsx'

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
          <PropertyPageGallery photos={this.state.photos}/>
        </div>
      );
    } else {
      return (
        <div>NO PHOTOS</div>
      );
    }

  }
}




ReactDOM.render(<App />, document.getElementById('app'));