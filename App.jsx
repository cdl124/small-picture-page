import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <img src={this.props.imgurl}></img>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

App.propTypes = {
  header: React.PropTypes.string,
  imgurl: React.PropTypes.string,
  description: React.PropTypes.string
}

App.defaultProps = {
  header: "Placeholder header",
  imgurl: "http://www.placekitten.com/300/400",
  description: "In the meantime, enjoy a kitty!"
}

export default App;
