<!-- /users list user/ -->
<template>
  <div class="userslistuser">
      <li :style="styleColor">
          {{ user.username }}
      </li>
  </div>
</template>

<script>
  import store from '../store'  
  export default {
    name: 'userslistuser',
    props: ['user'],
    computed: {
        styleColor () {
          return this.user && {
            backgroundColor: this.user.color
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
.userslistuser
  z-index 1
  margin 5px 0

</style>