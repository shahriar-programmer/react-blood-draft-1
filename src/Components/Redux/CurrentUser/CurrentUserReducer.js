const initialState = false

function CurrentUserReducer(state = initialState, action) {
    switch (action.type) {
        case "GetCurrentUser":
            return (action.payload);
        case "LoggedOutUser":
            return state;
        default:
            return state;
    }
}

export default CurrentUserReducer