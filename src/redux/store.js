import {rootReducer} from './reducers/rootReducer';
//import {composeWithDevTools} from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {createStore,compose,applyMiddleware} from 'redux';


/*
 !IMPORTANT NOTE :
 reduxImmutableStateInvariant: CHECKS IF YOU FOLLOW IMMUATABLE RULES DURING UPTADE STATE
!!! ONLY USE WHILE YOU ARE DEVELOPING APP. REMOVE IT BEFORE LIVE 
*/

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// try to use composeEnhancers function (REDUX docs.)
 //const store = createStore(rootReducer , composeWithDevTools());
 const store = createStore(rootReducer,composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
export default store;