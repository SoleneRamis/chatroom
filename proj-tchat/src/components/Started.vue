<!-- /login/ -->
<template>
  <div class="login">
    <form class="formulaire" @submit.prevent="onFormSubmit">
      <div class="contentForm">
        <img class="logo" src="../assets/icons/logo.gif"/>
        <br>
        <div class="errorLog">
          {{ this.errorLog }}
          {{this.error}}
        </div>
        <br>
        <div class="log">
          <input id="username" type="text" name="username" placeholder="log in..." v-model="username">
          <br>
          <button class="submit" oninvalid="">
            <img class="arrow" src="../assets/icons/arrow.svg"/>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>  
  import store from '../store'
  export default {
    name: 'started',
    components: {},
    data () {
      return {
        errorLog: '',
        username: '',
      }
    },
    methods: {
      onFormSubmit () {
        if (this.username.length > 0) {
          this.$emit('submit', this.username)
        }
        else {
          this.errorLog = 'Le nom d\'utilisateur que vous avez entré ne correspond pas. Veuillez vérifier et réessayer.'
        }
      }
    },
    computed: {
      error: () => store.error
    }
  }
</script>

<style lang="stylus" scoped>
.login
  position absolute
  width 100%
  height 100%
  top 0
  left 0
  right 0
  background-color: $PINK
  .container
    display flex
    flex-wrap wrap
    flex-direction column
    width auto
    height auto
    margin auto
    padding 0px

.log
  position relative
  display flex
  justify-content center
  flex-direction row
  z-index 1

.logo 
  margin-top 50px
  width 50%
  margin-left 140px
  @media (max-width: 1300px) 
    margin-left 90px
  @media (max-width: 1000px) 
    margin-left 73px
  @media (min-width: 580px) and (max-width: 800px) 
    margin-left 55px

.submit
  margin-top -6px
  background none 
  border none
  @media (max-width: 1300px) 
    margin-top -11px
  @media (min-width: 580px) and (max-width: 750px) 
    margin-top -7px
  
button
  outline none
  border none

.arrow
  transform rotate(90deg)
  @media (max-width: 1300px) 
    width: 60px;
  @media (min-width: 580px) and (max-width: 750px) 
    width: 44px;

.errorLog
  color $BLUE
  text-align center
  margin-top -45px
  margin-bottom 10px

.formulaire
	margin 5% auto
	width 50%
	height auto
	padding 2.5% 5% 1.5%

.title
	font-size 2em
	padding 0
	margin 0
	text-align center

textarea:focus, input:focus
  outline none
  outglow none

.contentForm
  display flex
  justify-content center
  flex-direction column
  width 100%

.contentForm input
  border none
  width 65%
  height 21px
  font-size 17px
  padding 0 0 2%
  background none
  text-shadow none

.contentForm #username
  background-color white
  border-radius 21px
  padding-left 30px
  text-align left
  color $LIGHT-PINK
  font-weight 800
  padding-top 12px
  width 45%
  @media (max-width: 1300px) 
    padding-top 8px
  @media (min-width: 580px) and (max-width: 750px) 
    padding-top 4px
  
::placeholder
  padding-top 10px
  font-size 15px
  color $LIGHT-PINK
  font-weight 800

</style>
