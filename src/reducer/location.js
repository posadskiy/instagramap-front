const initialState = {
    locations: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}