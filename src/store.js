import Vue from 'vue'
import Vuex from 'vuex'

import PokemonService from './api/pokemon-service'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: true,
        showAT: false,
        edit: false,

        done: 0,
        pokemons: [],
        selected: null,

        types: ["bug", "dragon", "dark", "electric", "fairy", "flying", "fighting", "fire", "grass", "ghost", "ground", "ice", "normal", "psychic", "steel", "poison", "rock", "water"]
    },
    mutations : {
        addPokemon(state, pokemon) {
            state.pokemons = pokemon

            //Argh
            pokemon.slice(0, 48).forEach(p =>
                PokemonService.retrieve(p.name)
            )
        },
        addDone(state) {
            state.done = state.done + 1;
            if(state.done > 47) {
                state.loading = false;
            }
        },
        changeEdit(state, value) {
            state.edit = value
        },
        createPokemon(state, value) {
            let sprites = { sprites: {front_default: state.pokemons[Math.floor(Math.random() * (state.done) + 1)].sprites.front_default}}
            let stats = {stats: [
                    {base_stat: Math.floor(Math.random() * (255)), stat: {name: 'hp'}},
                    {base_stat: Math.floor(Math.random() * (255)), stat: {name: 'attack'}},
                    {base_stat: Math.floor(Math.random() * (255)), stat: {name: 'defense'}},
                    {base_stat: Math.floor(Math.random() * (255)), stat: {name: 'speed'}},
                ]
            }

            let types = []
            let typeSize = Math.floor(Math.random() * (2) + 1)
            for(let i = 0; i < typeSize; i++) {
                let type = {type: {name: state.types[Math.floor(Math.random() * (state.types.length))]}}
                while(types.includes(type.type.name)) {
                    type = {type: {name: state.types[Math.floor(Math.random() * (state.types.length))]}}
                }
                types.push(type)
            }
            let pokemon =  {id: state.done + 1, types: types, ...value, ...stats, ...sprites, }
            Vue.set(state.pokemons, state.done, pokemon)
        },
        deletePokemon(state) {
            let pokemon = state.selected
            let pokemons =  state.pokemons
            pokemons.splice(pokemon.id - 1, 1)

            state.selected = state.pokemons[0]
            state.done = state.done - 1
        },
        selectPokemon(state, order) {
            if(order) {
                state.selected = state.pokemons.find(pokemon => pokemon.id === order)
                state.selected.order = state.selected.id
            }
        },
        showAT(state) {
            state.showAT = !state.showAT;
        },
        updatePokemon(state, pokemon) {
            pokemon = { ...state.pokemons[pokemon.order - 1], ...pokemon }
            Vue.set(state.pokemons, pokemon.order - 1, pokemon)
        },
        updatePokemons(state, pokemon) {
            state.pokemons = state.pokemons.map(p => {
                if(p.name === pokemon.name)
                    return pokemon
                else {
                    return p
                }
            })
            state.selected = state.pokemons[0]
        }
    },
    actions : {
        deletePokemon(state, id) {
            state = state.state
            let pokemons =  state.pokemons
            for (let i = 0; i < pokemons.length + 1; i++) {
                pokemons[i].id = i + 1;
            }
        },
    },
    getters : {
        pokemons: state => {
            let pokemons = []
            state.pokemons.filter(p => {
                if(p["stats"] !== undefined)
                    pokemons.push({name: p.name, order: p.id, image: p.sprites.front_default})
            })
            return pokemons
        },
        pokemonSelected: state => {
            let pokemon = state.pokemons[0]
            if(state.selected !== null) {
                pokemon = state.selected
            }

            let stats = []
            pokemon.stats.filter(s => {
                if (s.stat.name !== "special-defense" && s.stat.name !== "special-attack") {
                    stats.push({name: s.stat.name, value: s.base_stat})
                }
                return s
            })

            return {
                name: pokemon.name,
                height: pokemon.height,
                image_front: pokemon.sprites.front_default,
                order: pokemon.id,
                stats: stats,
                types: pokemon.types.map(t => t.type.name),
                weight: pokemon.weight,
            }
        }
    }
});

export default store