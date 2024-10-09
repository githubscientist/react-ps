import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // state initialization
      name: 'React',
    };
  }

  // method override to render the component
  render() {
    return <h1>Hello, {this.state.name}</h1>
  }
}

export default App;