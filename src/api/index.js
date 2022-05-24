import CONFIG from './config'
import axios from 'axios';

export default class ApiWrapper {
    getData() {
        return axios.get(CONFIG.baseURL + CONFIG.users);
    }
}