export default (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, userState: action.payload
            }
        default:
            return state;
    }
}