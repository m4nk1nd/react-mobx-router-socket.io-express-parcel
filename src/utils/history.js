import { syncHistoryWithStore } from 'mobx-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import RouteStore from 'store/RouteStore'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, RouteStore)

export default history