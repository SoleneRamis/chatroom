<!-- /message list/ -->
<template>
  <div class="messagelist">
    <ul class="messages">
      <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"/>
    </ul>
  </div>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'
import store from '../store'

export default {
  name: 'messageList',
  components: {
    MessagesListMessage,
  },
    computed: {
      messages: () => store.messages
  }
}
</script>

<style lang="stylus" scoped>
.messagelist
  position relative
  width 650px
  height 581px
  top 5px
  left -112px
  background-color transparent
  z-index 4
  overflow-y scroll

.messages
  z-index 11
  list-style none
  width 80%
</style>



