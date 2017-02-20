import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <img src="{this.props.imgurl}" />
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
  imgurl: "http://placekitten.com/200/300",
  description: "In the meantime, enjoy a kitty!"
}

export default App;
