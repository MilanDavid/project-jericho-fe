import {createStore} from "redux";
import rootReducer from "./RootReducer.jsx";
import api from '../utils/api.jsx';

const store = createStore(rootReducer);

api.getUser().then((user) => {
    if (user) {
        store.dispatch({
            type: 'SET_USER',
            payload: user
        });
    } else {
        window.location = `${process.env.LOGIN_URL}`;
    }
});

api.getBasket().then((basket) => {
    store.dispatch({
        type: 'SET_BASKET',
        payload: basket
    });
});

api.getIntegrations().then((integrations) => {
    store.dispatch({
        type: 'SET_INTEGRATIONS',
        payload: integrations
    });
});

export default store;