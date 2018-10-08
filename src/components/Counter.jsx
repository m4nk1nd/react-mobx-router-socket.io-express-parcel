import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('routing', 'counter') // multiple stores
@observer
class Counter extends React.Component {
  render() {
    const { location, push, goBack } = this.props.routing
    return <React.Fragment>
      count: {this.props.counter.count}
      <button onClick={this.props.counter.dec}>-</button>
      <button onClick={this.props.counter.inc}>+</button>
    </React.Fragment>
  }
}

export default Counter