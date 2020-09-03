const axios = require('axios')

class RequestService {

    constructor(url) {
        this.baseUrl = url;
    }

    get(url) {
        return axios.get(this.baseUrl + url).then(response => {
                return response
            }
        )
    }

}

const instance = new RequestService("https://pokeapi.co/api/v2/");
export default instance;