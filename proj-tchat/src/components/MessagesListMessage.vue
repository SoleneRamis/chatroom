<!-- /users list user/ -->
<template>
  <div class="messagesListMessage">
      <li class="msg">
        <span id="usermessage" :style="styleColor">
          {{ message.user.username }}
        </span>
        <br>
        <span id="messagetext" :class="emotion">
         {{ message.text }}
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
      user () {
      return store.users.find((user) => user.username === this.message.user.username)
      },
      emotion () {
        return this.message.emotion
      },
      styleColor () {
        return {
          backgroundColor: this.user.color
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
.messagesListMessage
  position relative 
  margin-bottom 20px

.msg #usermessage
  text-transform uppercase
  font-family $FONT
  font-weight 800
  font-style italic
  padding 0px 4px

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

.emotion
  font-size 10px
  margin-right 6px
</style>

