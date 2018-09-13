<!-- /sendbox + list messages/ -->
<template>
  <div class="chatBox">
    <h1 class="chat">BIENVENUE SUR LA TCHAT ROOM BDDI</h1>
    <MessagesList :messages="messages"/>
    <SendBox @messageSent="onMessageSent"/>
  </div>
</template>

<script>
import MessagesList from './MessagesList'
import SendBox from './SendBox'
import store from '../store'

export default {
  name: 'chatBox',
  components: {
      MessagesList,
      SendBox,
  },
  data () {
    return {
        // TODO supprimer
        messages: []
    }
  },
  methods: {
    onMessageSent (message) {
        // this.messages.push(message)
        this.$api.messageSend(message)
        // store.messages.push(message)
    }
  },
  computed: {
      messages: () => store.messages
  }
}
</script>

<style lang="stylus" scoped>
  .chatBox
    width 100%
    height 100%
    margin 0px
    padding 0px
</style>