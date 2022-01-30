import axios from 'axios';
import React from 'react';
import ImageList from './ImageList';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {cardArr: []};
  }

  async componentDidMount() {
    await axios.get('https://picsum.photos/v2/list', {
      params: {page: 1, limit: 5}
    }).then(response => {
      this.setState({ cardArr: response.data });
    });
  }

  renderImageList() {
    return <ImageList images={this.state.cardArr} />;
  }
  
  render() {
    return (
      <div>
        {this.renderImageList()}
      </div>
    );
  }
}

export default App;
