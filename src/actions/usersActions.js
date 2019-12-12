import * as actionType from "./actionTypes";

export function fetchUsers() {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {

                if (response.status !== 200) {
                    return;
                }

                response.json().then(responseBody => {
                    dispatch(setUsersList(responseBody));
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function setUsersList(userList) {
    return dispatch => {
        dispatch({
            type: actionType.SET_USERS_LIST,
            payload: userList
        });
        localStorage.setItem("usersList",JSON.stringify(userList));
    }
}