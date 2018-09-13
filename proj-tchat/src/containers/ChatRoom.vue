<template>
  <div class="chatroom">
    <TheHeader></TheHeader>
    <div class="chatbox">
      <UserList/>
      <MessagesList/>
      <SendBox/>
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader'
  import UserList from '../components/UserList'
  import MessagesList from '../components/MessagesList'
  import SendBox from '../components/SendBox'
  
  export default {
    name: 'chatroom',
    components: {
      TheHeader,
      UserList,
      MessagesList,
      SendBox,
    }
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