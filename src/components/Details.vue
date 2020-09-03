<template>
    <transition name="slide">
        <div v-if="show" class="viewer">
            <div v-if="loading" class="loader"/>
            <div v-else class="pokemon-image-container">
                <div class="pokemon-image" v-bind:style="{ backgroundImage: `url(${pokemon.image_front})`}"/>
                <span>#{{pokemon.order}}</span>
                <i class="material-icons" @click="showAT">edit</i>
            </div>
            <div class="pokemon-info">
                <div class="info">
                    <h3>{{pokemon.name}}</h3>
                    <div class="types">
                        <div v-for="type in pokemon.types"
                             class="type"
                             :class="type + '-type'"
                             :key="type"
                        >
                            {{type}}
                        </div>
                    </div>
                    <div class="measures">
                        <div class="weight">
                            {{pokemon.weight/10}} KG
                            <p>weight</p>
                        </div>
                        <div class="height">
                            {{pokemon.height/10}} M
                            <p>height</p>
                        </div>
                    </div>
                </div>
                <div class="stats">
                    <h4>Base Stats</h4>
                    <div class="stats-container">
                        <div v-for="stats in pokemon.stats" class="bar" :key="stats.name">
                            <div
                                 :class="stats.name"
                                 :style="{ width: `calc(${stats.value / 255 * 100}%` }"
                            />
                            <span>{{stats.name}} - {{stats.value}}/255</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>
  export default {
      name: 'Details',
      data: function() {
          return {
              show: false,
          }
      },
      methods: {
          showDetails() {
              this.show = true;
          },
          showAT() {
            this.$store.commit("showAT")
            this.$store.commit("changeEdit", true)
          }
      },
      computed: {
          loading() {
              return this.$store.state.loading
          },
          pokemon() {
              return this.$store.getters.pokemonSelected
          }
      }
  }
</script>

<style scoped>
    .viewer {
        background-color: #191919;
        border-radius: 10px;
        height: 60%;
        position: relative;
        overflow: hidden;
        width: 30%;
    }

    .loader {
        margin: auto;
    }

    .pokemon-image-container {
        align-items: flex-end;
        background-color: #ec1a1d;
        border-radius: 5px 5px 50px 50px;
        display: flex;
        height: 170px;
        justify-content: center;
        position: relative;
        width: 100%;
    }

    .pokemon-image {
        background-repeat: no-repeat;
        bottom: 0;
        height: 100px;
        left: 0;
        margin: auto;
        position: absolute;
        transform: scale(1.5);
        top: 0;
        right: 0;
        width: 100px;
    }

    .pokemon-image-container p {
        color: white;
        font-size: 24px;
        margin: 15px;
        text-align: center;
        text-transform:capitalize;
    }

    .pokemon-image-container span {
        color: white;
        font-size: 24px;
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .pokemon-image-container i {
      color: white;
      cursor: pointer;
      font-size: 24px;
      position: absolute;
      top: 15px;
      left: 15px;
    }

    .pokemon-info {
        color: white;
        height: auto;
    }

    .pokemon-info h3 {
        font-size: 30px;
        margin-bottom: 12px;
        margin-top: 15px;
        text-align: center;
        text-transform:capitalize;
    }

    .types {
        display: flex;
        justify-content: center;
    }

    .type {
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        margin: 5px 10px 5px 10px;
    }

    .measures {
        display: flex;
        justify-content: center;
    }

    .measures p {
        color: grey;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
    }

    .measures .weight,
    .measures .height {
        font-size: 20px;
        margin: 15px;
    }


    .stats {

    }

    .stats h4 {
        font-size: 22px;
        margin-top: 20px;
        margin-bottom: 10px;
        text-align: center;
    }

    .stats-container {
        margin-left: 40px;
        height: 110px;
        margin-right: 40px;
    }

    .bar {
        background-color: #282828;
        border-radius: 15px;
        height: 20px;
        position: relative;
        margin-top: 10px;
        overflow: hidden;
        width: 100%;
    }

    .bar span {
        color: white;
        text-align: center;
        left: 0;
        position: absolute;
        margin: 0;
        text-transform: uppercase;
        right: 0;
        z-index: 2;

    }

    .bar div {
        border-radius: 15px;
        height: 100%;
        position: absolute;
    }

    /* region Bar Color */

    .hp {
        background-color: #ec1a1d;
    }

    .attack {
        background-color: #ffb700;
    }

    .defense {
        background-color: #6890F0;
    }

    .speed {
        background-color: #39c9ab;
    }

    /* endregion Bar Color */

    /* region Animations */

    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }

    .slide-enter {
        transform: translateX(100%);
    }


    /* endregion Animations */

    /* region Type Colors */

    .bug-type {
        background-color: #A8B820;
    }

    .dragon-type {
        background-color: #7038F8;
    }

    .dark-type {
        background-color: #705848;
    }

    .electric-type {
        background-color: #F8D030;
    }

    .fairy-type {
        background-color: #EE99AC;
    }

    .flying-type {
        background-color: #A890F0;
    }

    .fighting-type {
        background-color: #C03028;
    }

    .fire-type {
        background-color: #F08030;
    }

    .grass-type {
        background-color: #78C850;
    }

    .ghost-type {
        background-color: #705898;
    }

    .ground-type {
        background-color: #E0C068;
    }

    .ice-type {
        background-color: #98D8D8;
    }

    .normal-type {
        background-color: #A8A878;
    }

    .psychic-type {
        background-color: #F85888;
    }

    .steel-type {
        background-color: #B8B8D0;
    }

    .poison-type {
        background-color: #A040A0;
    }

    .rock-type {
        background-color: #B8A038;
    }

    .water-type {
        background-color: #6890F0;
    }

    /* endregion type Colors */

</style>