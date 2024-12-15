import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'http://localhost:3456',
    headers: {
        'Authorization': `Bearer ${localStorage.accessToken}`
    }
})

export { CanceledError };