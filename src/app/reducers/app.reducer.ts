import {APP} from '../constants/actions'

const initialState={
    loading:false
}

export  function appReducer(state=initialState,action){
    switch (action.type){
        case APP.LOADING:
            return Object.assign({},state, {loading:true});
        case APP.READY:{
            return Object.assign({},state,{loading:false});
        }
        default:
            return state;
    }
}