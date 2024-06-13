import axios from "axios";

const token = localStorage.getItem('userinfo')

const config = axios.create({
    baseURL: `http://192.168.1.10:8000`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token ? JSON.parse(token) : ''}`,
    }
})

export default config