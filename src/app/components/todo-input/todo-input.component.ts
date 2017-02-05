import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';
import {ListActions} from "../../actions/list.action";
import {TodoItem} from "../../models/todo-item.model";

@Component({
    selector: 'aah-todo-input',    
    styleUrls: ['./todo-input.component.css'],
    template:`
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus
           #newTodoInput
           (keyup.enter)="addItem(newTodoInput)">
    `
})
export class TodoInputComponent  implements OnInit {
    private list:ListActions;
    constructor(private todoListService: TodoListService,_list:ListActions) {
        this.list=_list;
    }

    ngOnInit() { }
    addItem(inputElement): void {
    // It is not best practice to change element's property directly.
    // (Avoid passing the element reference itself to a method.)
    // Better install angular/forms and use FormsModule's ngModel.
    //this.todoListService.addItem(inputElement.value);
        this.list.add(new TodoItem(inputElement.value,false,false));
    inputElement.value = '';
  }
}