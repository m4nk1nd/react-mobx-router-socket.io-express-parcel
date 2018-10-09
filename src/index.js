import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import stores from 'store'
import { transport } from 'utils/socket'
import history from 'utils/history'
import App from 'comp'

class AppWrapper extends React.Component {

  componentWillUnmount() {
    // dispose websocket event listeners
    transport.dispose()
  }

  render() {
    return <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('app')
) 