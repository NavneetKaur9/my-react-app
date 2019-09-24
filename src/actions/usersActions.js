import * as actionType from "./actionTypes";

export function fetchUsers() {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {

                if (response.status !== 200) {
                    return;
                }

                response.json().then(responseBody => {

                    dispatch({
                        type: actionType.FETCH_USERS,
                        payload: responseBody
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function setUserDetail(user){
    return dispatch => {
        dispatch({
            type: actionType.SET_USER_DETAIL,
            payload: user
        })
    }
}