<template>
  <div class="chatroom">
    <TheHeader></TheHeader>
    <div class="chatbox">
      <UserList/>
      <MessagesList :messages="messages"/>
      <SendBox @messageSent="onMessageSent" />
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader'
  import UserList from '../components/UserList'
  import MessagesList from '../components/MessagesList'
  import SendBox from '../components/SendBox'
  import store from '../store'
  
  export default {
    name: 'chatroom',
    components: {
      TheHeader,
      UserList,
      MessagesList,
      SendBox,
    },
    methods: {
      onMessageSent (message) {
        // store.messages.push(message)
        this.$api.messageSend(message)
      }
    },
    computed: {
      messages: () => store.messages
    },
  }
</script>

<style lang="stylus" scoped>
.chatroom
  width 100%
  height 100%

.chatbox
  display flex
  justify-content space-between
  flex-direction row
</style>