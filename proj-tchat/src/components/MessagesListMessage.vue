<!-- /users list user/ -->
<template>
  <div class="messagesListMessage">
      <li class="msg">
        <span id="usermessage">
          {{ message.user.username }} {{message.created}}
        </span>
        <br>
        <span id="messagetext" v-bind:class="emotion">
          {{ message.text }} {{ message.emotion }}
        </span>
      </li>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    name: 'messagesListMessage',
    props: ['message'],
    computed: {
      emotion: () => store.emotion
    }
  }
</script>

<style lang="stylus" scoped>
.messagesListMessage
  position relative
  margin-bottom 20px

.msg #usermessage
  text-transform uppercase
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic

.msg #messagetext
  color white

.neutre
  font-family $FONT

.joyeux
  font-family 'Arial'
  text-shadow 1px 1px 1px $GREEN

.serieux
  font-family 'Times New Roman'

.murmure
  font-family 'Baskerville'
  font-style italic

.hurle
  font-family $FONT
  font-style italic
  text-transform uppercase
  font-size 70px
  text-shadow 2px 4px 1px $BLUE
  font-weight 800

.vastefaire
  font-family 'Wingdings'
</style>

