import {createStore,applyMiddleware,compose} from 'redux';
import {RootReducer} from "./reducers/root";

export class Store{
    private store;

    constructor() {
        
        this.store = createStore(RootReducer,window.devToolsExtension && window.devToolsExtension())
    }

    get state(){
        return this.store.getState();
    }

    dispatch(action){
        this.store.dispatch(action);
    }
}