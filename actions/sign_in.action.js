import { Auth } from "./constants";
import axios from '../services/axios';


export const sign_in = (response) => {

    return async dispatch => {

        try {
            const res = await axios.post('/api/users/login/', { 'username': `${response.name}`, 'password': `${response.password}` })
            localStorage.setItem('userinfo', JSON.stringify(res.data.access))
            if (res) {
                window.location.reload()
            }
        } catch (error) {
            dispatch({ type: Auth.SIGN_IN_FAILURE, payload: error })
        }
    }
}
