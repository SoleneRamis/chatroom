import Vue from 'vue'

const store = new Vue ({
    data: {
        messages: [],
        users: [],
        user: null,
        error: null,
    },
    created () {
        Vue.nextTick(() => { 
            this.$api.onError((data) => {
                console.error('Error from API: ', data)
                store.error = data.message
            })
            this.$api.onMessage((data) => {
                store.messages.push(data.message)
            })
            this.$api.onUsersUpdate(({ type, users, user }) => {
                console.log(`${user.username} just ${type} the room`)
                store.users = users
            })
        })
    }
})

export default store