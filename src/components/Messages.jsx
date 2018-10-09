import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('messages')
@observer class Messages extends React.Component {
  render() {
    const { server_messages, title, titleChange, addMessage } = this.props.messages
    return <React.Fragment>
      messages: {server_messages.length}
      {server_messages.length > 0 && server_messages.map(message => <div key={message.id + message.title}>{message.title}</div>)}
      <br />
      <input type="text" value={title} onChange={titleChange} />
      <button onClick={addMessage}>add message</button>
    </React.Fragment>
  }
}

export default Messages