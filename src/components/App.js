import React from 'react';
import endpointImagesAndDetails from '../static/endpointImagesAndDetails';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {cardArr: endpointImagesAndDetails};
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.cardArr}/>
      </div>
    );
  }
}

export default App;
