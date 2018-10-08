import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('messages')
@observer class Messages extends React.Component {
  render() {
    const { server_messages } = this.props.messages
    return <React.Fragment>
      messages: {server_messages.length}
      {server_messages.length > 0 && server_messages.map(message => <div key={message.id + message.title}>{message.title}</div>)}
    </React.Fragment>
  }
}

export default Messages