<!-- /user list/ -->
<template>
  <div class="userlist">
    <span class="online">ONLINE</span>
    <ul class="users">
      <UsersListUser v-for="(user, index) in users" :key="index" :user="user"/>
    </ul>
    <div class="box"></div>
    <div class="boxshadow"></div>
  </div>
</template>

<script>
import UsersListUser from './UsersListUser'
import store from '../store'

export default {
  name: 'userlist',
  components: {
     UsersListUser,
  },
  computed: {
    users: () => store.users
  }
}
</script>

<style lang="stylus" scoped>
.userlist
  position relative
  width 384px
  height 347px
  top 60px
  left 25px
  background-color transparent
  z-index 4

.online
  background-color $BLUE
  font-family $FONT
  color white
  font-weight 800
  font-style italic
  padding 10px 20px
  box-shadow 8px 8px $BLUE
  margin-left -297px
  text-transform uppercase

.box  
  width 195px
  position absolute
  top 38px
  bottom 0
  background-color white
  border solid 4px $BLUE
  z-index 3
  
.boxshadow  
  width 195px
  position absolute
  top 30px
  left -8px
  bottom 8px
  background-color white
  border solid 4px $BLUE
  z-index 3

.users
  text-transform uppercase
  font-family $FONT
  font-weight 800
  position relative
  z-index 11
  list-style-type none
  padding-top 6px
  padding-left 13px
  text-align center
  width 42%
  height 81%
  overflow-y scroll
  font-style italic

</style>