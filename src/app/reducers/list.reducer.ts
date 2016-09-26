import {LIST} from "../constants/actions";

export function listReducer(state = [], action) {
    switch (action.type) {

        case LIST.ADD_ITEM:
            return [...state, action.payload];

        case LIST.EDIT_ITEM:
            let item = state.find(item => item==action.payload);
            item=action.payload;
            return Object.assign({},state);

        case LIST.REMOVE_ITEM:
            let index = state.indexOf(action.payload);

            return state.slice(0, index)
                .concat(state.slice(index + 1));

        default:
            return state;
    }
}