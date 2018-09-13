<template>
  <div class="chatview">
    <transition name="fade" mode="out-in" appear>
      <div class="border"></div>
    </transition>
  </div>
</template>

<script>
  // import MessageList from '../components/MessageList'
  // import SendBox from '../components/SendBox'
  
  export default {
    name: 'start',
    components: {
      // MessageBox,
      // SendBox,
    }
  }
</script>

<style lang="stylus" scoped>
.chatview 
  position absolute
  width 100%
  height 100%
  top 0
  left 0
  right 0
  background-color: $PINK
</style>