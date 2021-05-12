import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCountFn = () => {
    this.setState({
      count: this.state.count + 1

    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCountFn}>+するよ</button>

      </div>
    )
  }
}

export default Counter