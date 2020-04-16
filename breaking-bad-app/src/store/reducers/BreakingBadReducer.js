const initialState = {
    homiesInfo: '', 
    isFetching: false, 
    error: ''
}; 

export const brBadReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_INFO_START': 
            return {
                ...state, 
                isFetching: true
            }; 

        case 'FETCH_INFO_SUCCESS': 
            return {
                ...state, 
                homiesInfo: action.payload, 
                isFetching: false, 
                error: ''
            }
        default: 
            return state; 
    }
}; 

