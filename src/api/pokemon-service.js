import requestService from './request.service';
import store from "../store";

class PokemonService {

    list({offset= 2000}) {
        //Promise permite o que métodos assíncronos retornem valores como métodos síncronos
        return new Promise((resolve, reject) => {
            requestService.get(`pokemon?limit=${offset}`).then(response => {
                return response.data
            }).then(data => {
                store.commit('addPokemon', data.results)
                resolve(data)
            }).catch(e => {
                reject(e)
            })
        })
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            requestService.get(`pokemon/${id}/`).then(response => {
                return response.data;
            }).then(data => {
                store.commit('updatePokemons', data)
                store.commit('addDone')
                resolve(data)
            }).catch(e => {
                reject(e)
            });
        });
    }

}

const instance = new PokemonService();
export default instance;


