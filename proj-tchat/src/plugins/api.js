import io from 'socket.io-client'

const socket = io.connect('https://bddi-2019-chat.herokuapp.com')

const api = {
    get connected() {
        return socket.connected
    },

    // Methods
    userRegister(username, avatar = '') {
        return new Promise((resolve, reject) => {
            socket.once('user registered', (user) => {
                resolve(user)
            })
            socket.once('error', (error) => {
                reject(error)
            })
            emitProxy('user register', {
                username,
                avatar
            })
        })
    },
    messageSend(message = '') {
        emitProxy('message new', message)
    },
    commandSend(command, value = '') {
        this.messageSend(`/${command} ${value}`)
    },

    // Events
    onMessage(cb) {
        socket.on('message new', cb)
    },
    onUsersUpdate(cb) {
        socket.on('users update', cb)
    },
    onError (cb) {
        socket.on('chat error', cb)
    }
}

function emitProxy(event, ...args) {
    if (socket.connected) {
        socket.emit(event, ...args)
    } else {
        console.log('Socket disconected... Waiting for connect.')
        socket.on('connect', () => {
            console.log('Socket reconnected. Emmitting.')
            socket.emit(event, ...args)
        })
    }
}

export default {
    install(Vue, options) {
        console.log('plugin install')
        Vue.prototype.$api = api
        Vue.$api = api
    }
}