import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo-item.model';
import {TodoListService} from '../../services/todoList.service';
import {Store} from "../../app.store";

@Component({
    selector: 'aah-todo-list',
    styleUrls: ['./todo-list.component.css'],
    template: `<ul class="todo-list">
      <aah-todo-item *ngFor="let todoItem of store.state.list"
                     [item]="todoItem"
                     (destroy)="destroyItem(todoItem)"
                     (editing)="clearEditing()">
      </aah-todo-item>
    </ul>`
})
export class TodoListComponent implements OnInit {
    private todoList: Array<TodoItem>;
    private store: Store;


    constructor(private todoListService: TodoListService, _store: Store) {
        this.store = _store;
    }

    ngOnInit(): void {
        //this.todoList = this.todoListService.getTodoList();
    }

    destroyItem(item: TodoItem): void {
        this.todoListService.removeItem(item);
    }

    // See comment in TodoItemComponent.editItem()
    clearEditing(): void {
        this.todoListService.clearEditing();
    }
}