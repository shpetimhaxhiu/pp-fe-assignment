import CONFIG from './config'
import axios from 'axios';

export default class ApiWrapper {
    async getData() {
        try {
            return await axios.get(
                CONFIG.baseURL + CONFIG.users
            );
        } catch (e) {
            this.errors.push(e);
        }
    }
}