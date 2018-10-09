import { transport } from 'utils/socket'
import { observable, action, computed } from 'mobx'

class ServerMessageStore {

  constructor() {
    transport.register({
      owner: this.constructor.name,
      on: [ // register namespaces with socket
        { 'server_messages': this.messages }
      ]
    })
    transport.socket.emit('server_messages')
  }

  @observable server_messages = ['one']
  @observable title = ''

  @action.bound
  messages(messages) {
    this.server_messages = [...messages]
  }

  @action.bound
  titleChange(e) {
    this.title = e.target.value
  }

  @computed 
  get isDisabled() {
    return this.title.trim() === '' ? true : false
  }

  @action.bound
  addMessage() {
    transport.socket.emit('add_message', { title: this.title })
    this.title = ''
  }
}

export default new ServerMessageStore()