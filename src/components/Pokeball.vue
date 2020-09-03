<template>
  <div class="pokeball">
    <transition name="slide-up">
      <div v-if="show" class="pokeball-top">
        <div class="pokeball-divider">
          <div @click="show = !show; showHome()" />
        </div>
        <div class="pokeball-title">
          <h2>Welcome to the Pokemon Center!</h2>
          <p>Press the pokeball's button</p>
        </div>
      </div>
    </transition>
    <transition name="slide-down">
      <div v-if="show" class="pokeball-bottom">
        <div class="pokeball-divider-back"/>
      </div>

    </transition>
  </div>
</template>

<script>
export default {
  name: 'Pokeball',
  props: { },
  data: function() {
    return {
      show: true,
    }
  },
  methods: {
    showHome() {
      this.$parent.showHome()
    }
  }
}
</script>


<style scoped>

  h2 {
    font-family: 'Pokemon', sans-serif;
    font-size: 40px;
    color: yellow;
    text-shadow: 0 0 5px blue, 0 0 5px blue, 0 0 5px blue, 0 0 5px blue;
    margin: 0;
  }

  p {
    color: white;
    font-size: 20px;
  }

  .pokeball {
    border-radius: 10%;
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 5000;
  }

  .pokeball-top {
    background-color: #ee2426;
    position: relative;
    height: 50%;
    z-index: 1;
  }

  .pokeball-top .pokeball-title {
    align-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
  }

  .pokeball-divider {
    background-color: #282828;
    bottom: 0;
    height: 60px;
    position: absolute;
    width: 100%;
  }

  .pokeball-divider div {
    background-color: white;
    border: 35px solid #282828;
    border-radius: 50%;
    cursor: pointer;
    height: 100px;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: -45px;
    right: 0;
    width: 100px;
  }

  .pokeball-bottom {
    background-color: white;
    height: 50%;
    overflow: hidden;
    position: relative;
  }

  .pokeball-divider-back {
    background-color: #656565;
    border: 35px solid #656565;
    border-radius: 50%;
    height: 100px;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: -105px;
    right: 0;
    width: 100px;
  }


  /* region Animations */

  .slide-up-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(-100%);
  }

  .slide-down-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-down-enter, .slide-down-leave-to {
    transform: translateY(100%);
  }

  /* endregion Animations */

</style>
