import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.modele";

@Injectable()
export class TodoService{

  todos: Todo[] = [];
  today = new Date();
  //defini un observable (en general Subject)
  todosSubject = new Subject<any[]>();


  constructor(private httpClient: HttpClient) {
    this.getTodosFromServer();
  }

  emitTodos() {
    this.todosSubject.next(this.todos);
  }

  onChangeStatus(i :number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    //Penser a MAJ les donnees dans notre Observable
    this.emitTodos();
    this.saveTodosFromServer();
  }

  onChangeIsModified(i :number) {
    this.todos[i].isModified = !this.todos[i].isModified;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  getTodo(index :number) {
    if (this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }

   //Injection des donnees dans le tableau puis emition
   addTodo(todo :Todo) : void{
    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodosFromServer();
  }

  //Envoie les donnees a la firebase
  saveTodosFromServer() {
    this.httpClient
      .put("https://todo-list-app-5bdfb-default-rtdb.europe-west1.firebasedatabase.app/todos.json", this.todos)
      .subscribe(
        () => {
          console.log("Enregistrement terminé");
        },
        (error) => {
          console.log("Erreur de sauvegarde : " + error);
        }
      );
  }

  //Recupere les donnees de la firebase
  getTodosFromServer() : void {
    this.httpClient
      .get<Todo[]>("https://todo-list-app-5bdfb-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
      .subscribe(
        (todoRecup : Todo[] ) => {
          this.todos = todoRecup;
          this.emitTodos();
        },
        (error) => {
          console.log("Erreur de chargement : " + error);
        },
        () => {
          console.log("Chargement terminé");
        }
      );
  }
}
