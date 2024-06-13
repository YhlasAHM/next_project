import { Auth } from "../actions/constants";

const initState = {
    loading: false,
    authenticated: false,
    user: {}
};

export default (state = initState, action) => {

    switch (action.type) {

        case Auth.SIGN_IN_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;

        case Auth.SIGN_IN_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticated: true,
                user: action.payload
            };
            break;

        case Auth.SIGN_IN_FAILURE:
            state = {
                ...initState,
                user: action.payload
            };
            break;
        case Auth.SIGN_OUT_REQUEST:
            state = {
                ...initState
            };
            break;
    }
    return state
};
