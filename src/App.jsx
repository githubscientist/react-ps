import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // state initialization
      count: 0,
    };
  }

  // method override to render the component
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >Increase</button>
      </div>
    )
  }
}

export default App;