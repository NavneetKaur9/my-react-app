import initialState from "./initialState";
import { SET_USERS_LIST } from "../actions/actionTypes";

export default function users(state = initialState, action) {

    switch (action.type) {

        case SET_USERS_LIST:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}