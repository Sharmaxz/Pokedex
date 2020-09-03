<template>
  <div class="AT">
    <div class="AT-container">
      <i class="material-icons" @click="showAT">close</i>
      <h3 v-if="edit">AT - EDIT</h3>
      <h3 v-else>AT - CREATE</h3>
      <form>
        <p v-if="error">The name field can not be empty</p>
        <label for="name">Pokemon's name</label>
        <input type="text" id="name" v-model="name">
        <label for="weight">Weight</label>
        <input type="number" id="weight" v-model="weight" @input="checkWeight()">
        <label for="height">Height</label>
        <input type="text" id="height" v-model="height" @input="checkHeight()">
        <span v-if="!edit">P.S.: Sprite, types and Base Stats are generated randomly when is created!</span>
      </form>
      <div class="options">
        <div v-if="edit" class="delete-button" @click="remove">Delete</div>
        <div v-if="edit" class="save-button" @click="save">Save</div>
        <div v-else class="save-button" @click="create">Create</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AT",
    data: function () {
      return {
        auxName: '',
        auxHeight: 0,
        auxWeight: 0,
        error: false,
      }
    },
    methods: {
      beforeDestroy() {
        this.auxName = ''
        this.auxHeight = 0
        this.auxWeight = 0
        this.error = false;
      },
      checkName() {
        if(this.name) {
          return true
        }
        this.error = true;
        return false
      },
      checkHeight() {
        if(this.height > 1000) {
          this.height = 1000
        } else if (this.height < 0) {
          this.height = 0
        }
      },
      checkWeight() {
        if(this.weight > 1000) {
          this.weight = 1000
        } else if (this.weight < 0 || this.weight.includes('-')) {
          this.weight = 0
        }
      },
      showAT() {
        this.$store.commit("showAT")
        this.beforeDestroy()
      },
      create() {
        if(this.checkName()) {
          let pokemon = {name: this.name, height: this.height * 10, weight: this.weight * 10}
          this.$store.commit("createPokemon", pokemon)
          this.$store.commit("showAT")
          this.$store.commit("addDone")
          this.beforeDestroy()
        }
      },
      save() {
          let pokemon = {order: this.pokemon.order, name: this.name, height: this.height * 10, weight: this.weight * 10}
          this.$store.commit("updatePokemon", pokemon)
          this.$store.commit('selectPokemon', this.pokemon.order);
          this.$store.commit("showAT")
          this.beforeDestroy()
      },
      remove() {
        this.$store.commit("showAT")
        this.$store.commit("deletePokemon")
        this.$store.dispatch("deletePokemon")
        this.beforeDestroy()
      },
    },
    computed: {
      edit() {
        return this.$store.state.edit
      },
      pokemon() {
        return this.$store.state.selected
      },
      name: {
        get() {
          if(this.edit) {
            return this.auxName !== '' ? this.auxName : this.pokemon ? this.pokemon.name : 'loading...'
          } else {
            return this.auxName
          }
        },
        set(value) {
          if (value != this.name) {
            this.auxName = value
          }
        }
      },
      height: {
        get() {
          if(this.edit) {
            return this.auxHeight !== 0 ? this.auxHeight : this.pokemon ? this.pokemon.height / 10 : 'loading...'
          } else {
            return this.auxHeight
          }
        },
        set(value) {
          if (value != this.height) {
            this.auxHeight = value
          }
        }
      },
      weight: {
        get() {
          if(this.edit) {
            return this.auxWeight !== 0 ? this.auxWeight : this.pokemon ? this.pokemon.weight / 10 : 'loading...'
          } else {
            return this.auxWeight
          }
        },
        set(value) {
          if(value != this.weight) {
            this.auxWeight = value
          }
        },
      }
    },
  }
</script>

<style scoped>

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }

  .AT {
    height: 100%;
    position:absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width:100%;
    z-index:100;
  }

  .AT-container {
    background-color: #191919;
    border-radius: 15px;
    height: 400px;
    width: 500px;
    margin: 0 auto;
  }

  .AT-container i {
    color: white;
    cursor: pointer;
    position: absolute;
    margin-top: 15px;
    margin-left: 20px;
  }

  .AT-container h3 {
    padding-top: 20px;
    margin: 0;
    text-align: center;
  }

  .AT-container form {
    padding: 25px;
  }

  .AT-container label {
    margin-top: 10px;
  }

  .AT-container span {
    font-size: 14px;
    margin-top: 14px;
  }

  .AT-container form > * {
    display: block;
  }


  .AT-container form p {
    margin: 0;
    color: #c32b2b;
  }

  .AT-container form input {
    background-color: #282828;
    border-radius: 5px;
    border: none;
    color: white;
    display: block;
    font-size: 18px;
    height: 26px;
    text-transform: capitalize;
    width: 50%;
  }

  .options {
    display: flex;
    justify-content: center;
  }

  .options > * {
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 15px 10px 15px;
    margin: 15px
  }

  .options .delete-button {
    background-color: #ec1a1d;
    color: white;
  }

  .options .save-button {
    background-color: #ffffff;
    color: #747474;
  }

  .options .save-button {
    background-color: #ffffff;
    color: #747474;
  }

</style>