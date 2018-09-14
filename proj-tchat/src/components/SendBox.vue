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
        <div class="serieux">sérieux</div>
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
  import store from '../store'

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
    computed: {
      emotion: () => store.emotion
    }
  }
</script>

<style lang="stylus" scoped>
.sendbox
  position relative
  width 397px
  height 400px
  top 213px
  left -30px
  background-color transparent
  z-index 4

.box  
  width 393px
  position absolute
  top 38px
  bottom -8px
  background-color white
  border solid 4px $BLUE
  z-index 3
  
.boxshadow  
  width 382px
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
  font-size 13px
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
  width 385px

.neutre
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 19px 37.5px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px
  box-shadow 4px 8px 3px
  z-index 12
  
.neutre:hover
  border-left solid 1px $BLUE
  background-color $LIGHT-GRAY
  text-transform capitalize
  padding 19px 38px
  box-shadow none
  padding 19px 40px

.joyeux
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 22px 33.5px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px
  box-shadow 8px 8px 3px
  z-index 11

.joyeux:hover
  border-left solid 1px $BLUE
  background-color $YELLOW
  text-transform capitalize
  padding 19px 38px
  box-shadow none
  padding 22px 35.5px
  text-shadow 2px 2px 5px #ff0000
  
.serieux
  border-top solid 4px $BLUE
  padding 19px 41px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px
  box-shadow 12px 8px 3px
  z-index 11

.serieux:hover
  font-family 'Times New Roman'
  background-color $GREEN
  text-transform capitalize
  font-size 14px
  padding 19px 45px
  z-index 1
  box-shadow none

.murmure
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 22px 29px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px
  box-shadow 4px 8px 3px
  z-index 13

.murmure:hover
  font-family 'Baskerville'
  font-style italic
  background-color $LIGHT-PINK
  text-transform lowercase
  padding 23px 35px
  z-index 1
  box-shadow none
  
.hurle
  border-top solid 4px $BLUE
  border-right solid 4px $BLUE
  padding 19px 37px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px
  box-shadow 8px 8px 3px
  z-index 11
  
.hurle:hover
  font-family $FONT
  font-style italic
  background-color $PINK
  // color white
  font-size 20px
  text-shadow 2px 2px 5px white
  text-transform uppercase
  padding 16px 23.5px
  z-index 1
  box-shadow none
  
.vastefaire
  border-top solid 4px $BLUE
  padding 19px 17px
  font-family $FONT
  color $BLUE
  font-weight 800
  font-style italic
  text-transform uppercase
  font-size 12px
  box-shadow 14px 8px 3px
  z-index 1

.vastefaire:hover
  background-color $ORANGE
  font-family 'Wingdings'
  width min-content
  padding 2px 41.5px
  box-shadow none
</style>
