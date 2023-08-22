import update from 'immutability-helper';

const initialState = {
    user: null,
    basket: [],
    integrations: {},
};

const rootReducer = (state = initialState, action) => {
    if (action.type === 'SET_USER') {
        return update(state, {user: {$set: action.payload}});
    }

    if (action.type === 'SET_BASKET') {
        return update(state, {basket: {$set: action.payload}});
    }

    if (action.type === 'SET_INTEGRATIONS') {
        return update(state, {integrations: {$set: action.payload}});
    }

    if (action.type === 'DESTROY') {
        return initialState;
    }

    return state;
};

export default rootReducer;
