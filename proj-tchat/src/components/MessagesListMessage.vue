<!-- /users list user/ -->
<template>
  <div class="messagesListMessage">
      <li class="msg">
        <span id="usermessage">
          {{ message.user.username }} {{message.created}}
        </span>
        <br>
        <span id="messagetext">
          {{ message.text }}
        </span>
      </li>
  </div>
</template>

<script>
  export default {
    name: 'messagesListMessage',
    props: ['message']
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
  font-weight 400
  font-style italic
</style>

