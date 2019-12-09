import initialState from "./initialState";
import { FETCH_USERS } from "../actions/actionTypes";

export default function users(state = initialState, action) {

    switch (action.type) {

        case FETCH_USERS:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}