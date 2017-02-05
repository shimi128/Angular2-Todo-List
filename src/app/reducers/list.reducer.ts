import {LIST} from "../constants/actions";
import {TodoItem} from "../models/todo-item.model";

const initialState:Array<TodoItem>=
    [
        new TodoItem('RSVP Yes', true, false),
        new TodoItem('Set up environment', true, false),
        new TodoItem('Clone project', false, false),
        new TodoItem('Come to Angular2', false, false),
    ];



export function listReducer(state = initialState, action) {
    switch (action.type) {

        case LIST.ADD_ITEM:
            return [...state, action.payload];

        case LIST.EDIT_ITEM:
            let item = state.find(item => item==action.payload);
            item=action.payload;
            item.completed=!item.completed;
            item = Object.assign({},item);
            return state;

        case LIST.REMOVE_ITEM:
            let index = state.indexOf(action.payload);
            return state.slice(0, index)
                .concat(state.slice(index + 1));

        default:
            return state;
    }
}