<template>
  <div class="theheader">
    <div class="info">
      <span class="chatroom">chatroom</span> 
      <span class="separator">●</span> 
      <span class="username">{{user.username}}</span>
    </div>
    <span class="disconnect">X</span>
  </div>
</template>

<script>
  // import MessageList from '../components/MessageList'
  // import SendBox from '../components/SendBox'
  import store from '../store'
  
  export default {
    name: 'theheader',
    components: {
      // MessageBox,
      // SendBox,
    },
    computed: {
      user: () => store.user
  },
  }
</script>

<style lang="stylus" scoped>
.theheader 
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  background-color: $PINK
  border solid 4px $BLUE
  display flex
  flex-direction row
  justify-content space-between

.info
  height 6%
  background-color $BLUE
  font-family $FONT
  color white
  font-weight 800
  font-style italic
  padding 10px 50px 0 50px
  box-shadow: -8px 8px $BLUE
  text-transform uppercase

.separator
  font-size 21px

.chatroom 
  padding-right 20px

.username
  padding-left 20px

.disconnect
  height 5%
  background-color $BLUE
  font-family $FONT
  color white
  font-weight 800
  font-style italic
  padding 10px 30px 0 20px
  box-shadow: 8px 8px $BLUE

</style>