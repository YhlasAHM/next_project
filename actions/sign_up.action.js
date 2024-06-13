import { Auth } from "./constants";
import axios from '../services/sign_up_axios'

export const sign_up = (response) => {

    return async dispatch => {

        try {

            dispatch({ type: Auth.SIGN_UP_REQUEST });
            const res = await axios.post('/api/users/register/', { 'name': `${response.name}`, 'email': `${response.email}`, 'password': `${response.password}` })
            dispatch({ type: Auth.SIGN_UP_SUCCESS })
            dispatch({ type: Auth.SIGN_IN_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: Auth.SIGN_UP_FAILURE, payload: error })
        }
    }
}

export const sign_out = () => {
    return async dispatch => {
        localStorage.clear()
        dispatch({ type: Auth.SIGN_OUT_REQUEST })
    }
}