import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TodoListService } from './services/todoList.service';
import {APP_COMPONENTS} from "./components/app.component";
import {Store} from "./app.store";
import {APP_ACTIONS} from "./actions/app.action";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent, ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      {
          provide : LocationStrategy,
          useClass: HashLocationStrategy

      },TodoListService,Store,...APP_ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }
