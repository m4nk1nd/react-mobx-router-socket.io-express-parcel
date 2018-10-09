import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route } from "react-router-dom"
import { withRouter } from 'react-router'

import { Home, Counter, Messages} from 'comp'

@inject('routing')
@observer class App extends Component {
  render() {
    const { location, push, goBack } = this.props.routing

    return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <button onClick={() => push('/')}>Home</button>
        <button onClick={() => push('/counter')}>Counter</button>
        <button onClick={() => push('/messages')}>Messages</button>
        <button onClick={() => goBack()}>Go Back</button>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/messages" component={Messages} />
      </div>
    )
  }
}

export default withRouter(App)