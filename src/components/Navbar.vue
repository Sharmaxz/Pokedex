<template>
    <transition name="slide">
        <div v-if="show" class="navbar">
            <div class="pokemon-search">
                <input type="text" placeholder="Search for the name or ID">
                <i class="material-icons">search</i>
            </div>
            <div class="create" @click="showAT">Create Pokemon</div>
            <div class="navbar-advanced"></div>
        </div>
    </transition>
</template>


<script>

export default {
    name: 'Navbar',
    props: {},
    data: function () {
        return {
            show: false,
        }
    },
    methods: {
        showNavbar() {
            this.show = true;
        },
        showAT() {
            this.$store.commit("showAT")
            this.$store.commit("changeEdit", false)
        }
    }
}

</script>

<style scoped>

    .navbar {
        background-color: #ec1a1d;
        border-radius: 0 0 10px 10px;
        border-bottom: 5px solid #a7181a;
        padding: 20px 0 20px 0;
        position: fixed;
        width: 100%;
    }

    .navbar .create {
        background-color: #282828;
        border-radius: 5px;
        color: #afafaf;
        cursor: pointer;
        padding: 10px;
        position: absolute;
        top: 16px;
        right: 50px;
    }

    .pokemon-search {
        position: relative;
        min-width: 345px;
        margin-left: 50px;
        max-width: 500px;
        width: 40%;
    }

    .pokemon-search input {
        background: none;
        border: unset;
        border-bottom: 2px solid white !important;
        color: white;
        padding-left: 5px;
        padding-right: 45px;
        font-size: 24px;
        outline: none;
        width: 100%;
    }

    .pokemon-search i {
        color: white;
        opacity: .5;
        position: absolute;
        right: -35px;
        bottom: 5px;
    }

    .navbar-advanced {
        background-color: #a7181a;
        position: absolute;
        top: 80px;
    }
    /* region Animations */

    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }

    .slide-enter {
        transform: translateY(-100%);
    }

    /* endregion Animations */

</style>