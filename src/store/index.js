import ServerMessageStore from './ServerMessageStore'
import { CountStore } from './CountStore'
import RouteStore from './RouteStore'

const stores = {
  routing: RouteStore,
  counter: CountStore,
  messages: ServerMessageStore
}

export default stores
