import io from 'socket.io-client/lib'
import { observable, action } from 'mobx'

class ServerMessageStore {
  @observable server_messages = ['one']

  @action
  messages(messages) {
    this.server_messages = [...messages]
  }
}

const socket = io()

const store = new ServerMessageStore()

socket.on('connect', function () {
  socket.emit('server_messages')
  socket.on('server_messages', function (messages) {
    store.messages(messages)
  })
})

export default store