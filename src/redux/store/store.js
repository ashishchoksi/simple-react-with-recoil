import { createStore } from 'redux';

/**
 * reducer takes state and type of event
 * based on type it performs some action
 * if somehow you call reducer with given type it will somehow updates the state
 */
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

/**
 * Store is single place that holds the state
 * store is immutable object
 * only reducer can change the store value 
 * your app directly cannot change store it ask reducer to change
 * so, store takes reducer as input
 */
export const store = createStore(reducer);