import { Auth } from "./constants";
import axios from '../services/axios';


export const userProfile = () => {
    return async dispatch => {
        try {
            const token = JSON.parse(localStorage.getItem('userinfo'))
            if (token) {
                dispatch({ type: Auth.SIGN_IN_REQUEST })
                const res = await axios.get('/api/user/profile')
                dispatch({ type: Auth.SIGN_IN_SUCCESS, payload: res.data })
            }
        } catch (error) {
            console('errorr')
        }
    }
}
