<template>
  <div class="start">
    <transition name="fade" mode="out-in" appear>
      <div>
        <started @submit="onFormSubmit"></started>
      </div>
    </transition>
  </div>
</template>

<script>
  import Started from '../components/Started'
  import store from '../store'

  export default {
    name: 'start',
    components: {
      Started,
    },
    methods: {
      onFormSubmit (username) {
        this.$api.userRegister(username).then((user) => {
          store.user = user
          this.$router.push({name: 'chatroom'})
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.start 
  width 100%
  height 100%
  margin 0px
  padding 0px
</style>