import {Store} from "../app.store";
import {LIST} from "../constants/actions";
import {Injectable} from "@angular/core";

@Injectable()
export class ListActions {
    private store: Store;

    constructor(_store: Store) {
        this.store = _store;
    }

    add(item){
        this.store.dispatch({
            type:LIST.ADD_ITEM,
            payload:item
        })
    }

    remove(item) {
        this.store.dispatch({
            type   : LIST.REMOVE_ITEM,
            payload: item
        })
    }

    edit(item) {
        this.store.dispatch({
            type   : LIST.EDIT_ITEM,
            payload: item
        })
    }

}