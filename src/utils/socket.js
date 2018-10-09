import io from 'socket.io-client/lib'

const socket = io()

// TODO
const transport = (function (socket) {

  var owners = {}

  return {
    socket,
    register: (config) => {
      owners[config.owner] = {
        ...config
      }
      config.on && config.on.forEach(namespace => {
        Object.keys(namespace).forEach(namespaceKey => {
          socket.on(namespaceKey, namespace[namespaceKey])
        })
      })
    },
    dispose: () => {
      Object.keys(owners).forEach(key => {
        Object.keys(owners[key].on).forEach(namespace => {
          socket.off(namespace, owners[key].on[namespace])
        })
      })
    }
  }

})(socket)

export {
  transport
}
