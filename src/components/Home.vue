<template>
    <div class="home">
        <Pokeball v-show="showPokeball"/>
        <AT v-show="showAT"/>
        <Navbar ref="navbar"/>
        <div class="info">
            <Pokedex ref="pokedex"/>
            <Details ref="details"/>
        </div>
    </div>
</template>



<script>

import PokemonService from '../api/pokemon-service'
import Pokeball from './Pokeball.vue'
import Navbar from './Navbar.vue'
import Details from './Details.vue'
import Pokedex from './Pokedex.vue'
import AT from './AT.vue'

export default {
    name: 'Home',
    components: {
        Pokeball,
        Navbar,
        Details,
        Pokedex,
        AT,
    },
    props: {},
    data: function () {
        return {
            showPokeball: true,
            show: false,
        }
    },
    methods: {
        showHome() {
            this.show = !this.show
            setTimeout(() => {
                this.showPokeball = false
                this.$refs.navbar.showNavbar();
                this.$refs.details.showDetails();
                this.$refs.pokedex.showPokedex();
            }, 500)
        },
    },
    mounted() {
        PokemonService.list({})
    },
    computed: {
        showAT() {
            return this.$store.state.showAT
        }
    }
}

</script>

<style scoped>

    .home {
        position: fixed;
        height: 100%;
        width: 100%;
    }

    .info {
        margin-top: 80px;
        display: flex;
        height: 100%;
    }

    .info > * {
        margin: 50px;
    }

    /* region Animations */

    .slide-right-enter-active, .slide-right-leave-active {
        transition: opacity .3s ease;
        height: 500px;
        width: 500px;
        background-color: red;
    }

    .slide-right-enter, .slide-right-leave-to {
        opacity: 0;
    }

    /* endregion Animations */

</style>