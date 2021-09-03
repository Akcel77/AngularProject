import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.modele";

@Injectable()
export class TodoService{
  todoStatus : any;
  todos: Todo[] = [];
  today = new Date();
  //defini un observable (en general Subject)
  todosSubject = new Subject<any[]>();


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
          todoImage : "http://placeimg.com/300/300/tech",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis"
        },
        {
          todoName : "Projet 3",
          todoStatus : false,
          todoImage : "http://placeimg.com/300/300/tech",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis. Lorem ipsum dolor sit amet, consectetur adipis"
        },
        {
          todoName : "Projet 4",
          todoStatus : false,
          todoImage : "http://placeimg.com/300/300/tech",
          isModified : false,
          description : "Lorem ipsum dolor sit amet, consectetur adipis"
        }
      ];
      //Ajoutes les donnes dans notre Observanle
      this.emitTodos();
    }, 1000)
  }

  //Injection des donnees dans le tableau puis emition
  addTodo(todo :Todo) : void{
    this.todos.unshift(todo);
    this.emitTodos();
  }

  emitTodos() {
    this.todosSubject.next(this.todos);
  }

  onChangeStatus(i :number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    //Penser a MAJ les donnees dans notre Observable
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
