import axios from 'axios';

export function setData(data) {
    return {
        type: 'SET_DATA',
        payload: data
    }
}

export function getLocationByUserName(name) {
    return (dispatch) => {
        return axios.get('http://192.168.1.77:8080/info/' + name + '/media')
            .then(
                response => {
                    dispatch(setData(response));
                },
                error => {
                    dispatch(setData(error));
                }
            );
    }
}
