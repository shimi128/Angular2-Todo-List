import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model'

@Component({
    selector: 'aah-todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() item: TodoItem;
    @Output() destroy: EventEmitter<any> = new EventEmitter();
    @Output() editing: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    changeCompleted(checked: boolean): void {
        this.item.completed = checked;
    }

    destroyItem(): void {
        this.destroy.emit(this.item);
    }

    editItem(): void {
        // since the input is not focused on when it reveals, 
        // we need to tell the parent to set all other items
        // to editing = false.
        // this will be refactored when we'll use a directive
        // to set autofocus on the input, 
        // and then we could use (blur)="cancelEdit()"
        this.editing.emit(this.item);
        this.item.editing = true;
    }

    changeTitle(newTitle: string): void {
        this.item.title = newTitle;
        this.item.editing = false;
    }

    cancelEdit(): void {
        this.item.editing = false;
    }
}