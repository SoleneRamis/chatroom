<!-- /input message + button/ -->
<template>
  <div class="sendbox">
    <form action="#" @submit.prevent="onFormSubmit">
      <div class="contentForm">
        <input id="message" type="text" placeholder="Tapez votre message et choisissez votre émotion." v-model="input">
      </div>
      <div class="btn">
        <div class="neutre">neutre</div>
        <div class="joyeux">joyeux</div>
        <div class="serieux">serieux</div>
        <div class="murmure">murmure</div>
        <div class="hurle">hurle</div>
        <div class="vastefaire">vas te faire ***</div>
      </div>
    </form>
    <div class="box"></div>
    <div class="boxshadow"></div>
  </div>
</template>

<script>

export default {
  name: 'sendbox',
  data () {
    return {
        input: ''
    }
  },
  methods: {
    onFormSubmit () {
        this.$emit('messageSent', this.input)
        this.input = ''
    }
  },
}
</script>

<style lang="stylus" scoped>
.sendbox
  position relative
  width 355px
  height 400px
  top 213px
  left -30px
  background-color transparent
  z-index 4

.box  
  width 360px
  position absolute
  top 38px
  bottom 0
  background-color white
  border solid 4px $BLUE
  z-index 3
  
.boxshadow  
  width 360px
  position absolute
  top 30px
  left -8px
  bottom 8px
  background-color white
  border solid 4px $BLUE
  z-index 3

.contentForm input
    width 340px
    padding 0 0 205px 0
    margin-top 40px
    z-index 11
    position relative
    border none
    outline none

.contentForm #message
  color $LIGHT-PINK
  font-family $FONT
  font-weight 600
  font-style italic

::placeholder
  color $LIGHT-PINK
  font-family $FONT
  font-weight 400
  font-style italic

.btn
  position relative
  display flex
  justify-content flex-start
  flex-wrap wrap
  z-index 11
  left -5px
  width 365px

.neutre
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 19px 35.5px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px

.joyeux
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 22px 31.5px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px

.serieux
  border-top solid 4px $BLUE
  padding 19px 35px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px

.murmure
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 22px 26px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px

.hurle
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 19px 36px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px

.vastefaire
  border-top solid 4px $BLUE
  padding 19px 10px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px

</style>
