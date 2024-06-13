import axios from "axios";

const config = axios.create({
    baseURL: `http://192.168.1.10:8000`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default config
