<template>
    <transition name="slide">
        <div v-if="show" class="pokedex">
                <h3>POKEDEX</h3>
            <div v-if="loading" class="loader"/>
            <div v-else class="result">
                <div class="pokemon"
                     @click="selectPokemon(pokemon.order)"
                     v-for="pokemon in pokemons" :key="pokemon.order"
                >
                    <div class="pokemon-image" v-bind:style="{ backgroundImage: `url(${pokemon.image})`}"/>
                    <p>{{pokemon.name}}</p>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>

export default {
    name: 'Pokedex',
    data: function() {
        return {
            show: false,
        }
    },
    methods: {
        showPokedex() {
            this.show = true;
        },
        selectPokemon(order) {
            this.$store.commit('selectPokemon', order);
        }
    },
    computed: {
        loading() {
            return this.$store.state.loading
        },
        pokemons() {
            return this.$store.getters.pokemons
        }
    }
}
</script>

<style scoped>
    .pokedex {
        background-color: #191919;
        border-radius: 10px;
        position: relative;
        height: 100%;
        width: 60%;
    }

    .loader {
        bottom: 0;
        position: absolute;
        top: 0;
        margin: auto;
        left: 0;
        right: 0;
    }

    h3 {
        color: #ec1a1d;
        font-size: 28px;
        margin: 20px 0 20px 0;
        text-align: center;
    }

    .result {
        display: grid;
        height: calc(100% - 215px);
        grid-template-columns: repeat(6, 140px);
        grid-gap: 30px;
        padding: 15px;
        margin: 15px;

        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: #ec1a1d #282828;
    }

    .pokemon {
        cursor: pointer;
        text-align: center;
    }

    .pokemon-image {
        background-repeat: no-repeat;
        height: 100px;
        margin-left: 25px;
        transform: scale(1.2);
        width: 100px;
    }

    .result p {
        text-transform:capitalize;
        margin-top: 5px;
    }


    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px #282828;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(255,0,0,0.8);
    }

    /* region Animations */

    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }

    .slide-enter {
        transform: translateX(-100%);
    }


    /* endregion Animations */

    @media only screen and (max-width: 1750px) {
      .result {
        grid-template-columns: repeat(5, 140px);
      }
    }

    @media only screen and (max-width: 1450px) {
        .result {
            display: grid;
            height: calc(100% - 215px);
            grid-template-columns: repeat(4, 140px);
            padding: 15px;
            margin: 15px;

            overflow-y: scroll;
            overflow-x: hidden;
            scrollbar-width: thin;
            scrollbar-color: #ec1a1d #282828;
        }
    }

    @media only screen and (max-width: 1150px) {
        .result {
            display: grid;
            height: calc(100% - 215px);
            grid-template-columns: repeat(3, 140px);
            padding: 15px;
            margin: 15px;

            overflow-y: scroll;
            overflow-x: hidden;
            scrollbar-width: thin;
            scrollbar-color: #ec1a1d #282828;
        }
    }

</style>