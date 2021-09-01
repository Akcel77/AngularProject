import { OnDestroy, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TodoService } from "../service/todo.service";


@Component({
    selector: "my-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.css"],
})

export class TodoComponent implements OnInit, OnDestroy {
  today : any;
  todos : any;
  todosSub: Subscription = new Subscription;


  constructor(private todoService: TodoService,
              private router : Router) {

  }
  ngOnInit() {
    this.today = this.todoService.today;
    this.todosSub = this.todoService.todosSubject.subscribe(
      (value :any[]) => {
        this.todos = value;
      },
      (error :any) => {
        console.log("Erreur : " + error);
      },
      () => {
        console.log("Observable complete");
      });
      this.todoService.emitTodos();
  }
  onChangeStatus(i :number) {
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModified(i :number) {
    this.todoService.onChangeIsModified(i);
  }

  onView(id :number) {
    this.router.navigate(["single-todo", id]);
  }
  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }
}
