import { Component } from "@angular/core";


@Component({
    selector: "my-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.css"],
})

export class TodoComponent {
   todos = [
    {
      todoName : "Projet 1",
      todoStatus : true,
      todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    },
    {
      todoName : "Projet 2",
      todoStatus : true,
      todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    },
    {
      todoName : "Projet 3",
      todoStatus : false,
      todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    },
    {
      todoName : "Projet 4",
      todoStatus : false,
      todoImage : "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    }
  ]

  onChangeStatus(i :number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }
}
