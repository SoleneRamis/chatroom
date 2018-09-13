<!-- /users list user/ -->
<template>
  <div class="userslistuser">
      <li v-bind:style="{background: this.activeColor}">
          {{ user.username }}
      </li>
  </div>
</template>

<script>

const colorRand = [
  '#F8B5B8',
  '#A4E7FF',
  '#F9E383',
  '#F37449',
  '#99D18B',
  '#A385BD',
]

export default {
  name: 'userslistuser',
  props: ['user'],
  computed: {
    activeColor: () => colorRand[Math.floor(Math.random()*6)]
  },
}
</script>

<style lang="stylus" scoped>
.userslistuser
  z-index 1
  margin 5px 0

</style>