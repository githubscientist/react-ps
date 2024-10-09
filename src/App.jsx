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

    // method to increase the count
    const increase = () => {
      this.setState({
        count: this.state.count + 1,
      });
    }

    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button
          onClick={increase}
        >Increase</button>
      </div>
    )
  }
}

export default App;