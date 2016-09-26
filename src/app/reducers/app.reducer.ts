import {APP} from '../constants/actions'

export  function appReducer(state,action){
    switch (action.type){
        case APP.LOADING:
            return Object.assign({},state, {loading:true});
        case APP.READY:{
            return Object.assign({},state,{loading:false});
        }
    }
}