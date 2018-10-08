import React from 'react' 
import ReactDOM from 'react-dom' 
import createBrowserHistory from 'history/createBrowserHistory' 
import { Provider } from 'mobx-react' 
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router' 
import { Router } from 'react-router' 

import ServerMessageStore from 'store/ServerMessageStore'
import { CountStore } from 'store/CountStore'
import App from 'comp/App'

const browserHistory = createBrowserHistory() 
const routingStore = new RouterStore() 

const stores = {
  routing: routingStore,
  counter: CountStore,
  messages: ServerMessageStore
} 

const history = syncHistoryWithStore(browserHistory, routingStore) 

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
) 