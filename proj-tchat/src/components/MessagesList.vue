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
  width 384px
  height 347px
  top 60px
  left 25px
  background-color transparent
  z-index 4

.messages
  // text-transform uppercase
  // font-family $FONT
  // font-weight 800
  position relative
  z-index 11
  list-style none
  height 36%
  overflow-y scroll
  // list-style-type none
  // padding-top 6px
  // padding-left 13px
  // text-align center
  // width 42%
  // height 81%
  // overflow-y scroll
</style>



