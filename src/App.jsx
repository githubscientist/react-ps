import React from 'react';

class Counter extends React.Component {

  // lifecycle method to log the component mounting
  componentDidMount() {
    console.log('Component mounted');
  }

  // component unmounting lifecycle method
  componentWillUnmount() {
    console.log('Component unmounted');
  }

  // component updating lifecycle method
  componentDidUpdate() {
    console.log('Component updated');
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.count}</h1>
      </div>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // state initialization
      count: 0,
      showCounter: true,
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
        {
          this.state.showCounter &&
          (
            <div>
              <Counter count={this.state.count} />
              <button
                onClick={increase}
              >Increase</button>
            </div>
          )
        }
        <br />
        <button
          onClick={() => this.setState({
            ...this.state,
            showCounter: !this.state.showCounter,
          })}
        >
          {
            this.state.showCounter ? 'Hide Counter' : 'Show Counter'
          }
        </button>
      </div>
    )
  }
}

export default App;