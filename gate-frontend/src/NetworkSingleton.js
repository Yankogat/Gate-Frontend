import axios from 'axios'

class NetworkSingleton {
    BASE_SERVER_URL = "http://localhost:8080";

    axiosI = axios.create({
        baseURL: this.BASE_SERVER_URL,
        withCredentials: true
    })

    async get(url, options = {}) {
        return await this.axiosI.get(url, options)
    }

    async post(url, data = {}, options = {}) {
        return await this.axiosI.post(url, data, options)
    }
}

const networkSingleton = new NetworkSingleton();

export default networkSingleton;