import config from './config.js'

export default function entries() {
    return {
        getUsersList: this.request(config.users)
    }
}