import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TodoService{
  todoStatus : any;
  todos : any;
  today = new Date();
  todosSubject = new Subject<any>();


  constructor() {
    setTimeout(() => {
    this.todos= [
        {
          todoName : "Projet 1",
          todoStatus : true,
          todoImage : "http://placeimg.com/300/300/tech",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis"
        },
        {
          todoName : "Projet 2",
          todoStatus : true,
          todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis"
        },
        {
          todoName : "Projet 3",
          todoStatus : false,
          todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis. Lorem ipsum dolor sit amet, consectetur adipis"
        },
        {
          todoName : "Projet 4",
          todoStatus : false,
          todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis"
        }
      ];
      this.emitTodos();
    }, 1000)
  }

  emitTodos() {
    this.todosSubject.next(this.todos);
  }

  onChangeStatus(i :number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
  }

  onChangeIsModified(i :number) {
    this.todos[i].isModified = !this.todos[i].isModified;
    this.emitTodos();
  }

  getTodo(index :number) {
    if (this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }


}
