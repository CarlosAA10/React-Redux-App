import axios from 'axios'; 

export const fetchHomies = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_INFO_START'})
        axios
        .get('https://www.breakingbadapi.com/api/characters')
        .then(res => {
            console.log('this is res', res); 
            dispatch({ type: 'FETCH_INFO_SUCCESS', payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    }
}