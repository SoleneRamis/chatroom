import Vue from 'vue'

const store = new Vue ({
    data: {
        messages: [],
        users: [],
        user: null,
        error: null,
        emotion: ''
    },
    created () {
        Vue.nextTick(() => { 
            this.$api.onError((data) => {
                console.error('Error from API: ', data)
                store.error = data.message
            })
            this.$api.onMessage((data, emotion) => {
                if(this.user && data.message.user.username == this.user.username) {
                    data.message.emotion = this.emotion
                } 
                store.messages.push(data.message)
            })
            this.$api.onUsersUpdate(({ type, users, user }) => {
                if (store.users.length === 0 && users.length > 0) {
                    store.users = users.map((user) => {
                        user.color = getRandomColor()
                        return user
                    })
                } else {
                    switch (type) {
                        case 'join':
                            user.color = getRandomColor()
                            store.users.push(user)
                            break
                        case 'left':
                            let i = store.users.findIndex((u) => user.username === u.username)
                            i && store.users.splice(i, 0)
                    }
                }
            })
            const color = ['#F8B5B8', '#A4E7FF', '#F9E383', '#F37449', '#99D18B', '#A385BD']
            const getRandomColor = () => color[Math.floor(Math.random() * 6)]
         })
    }
})

export default store