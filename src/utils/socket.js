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
      Object.keys(owners).forEach(owner => {
        Object.keys(owners[owner].on).forEach(namespace => {
          socket.off(namespace, owners[owner].on[namespace])
          delete (owners[owner].on[namespace])
        })
        delete (owners[owner])
      })
    }
  }

})(socket)

export {
  transport
}
