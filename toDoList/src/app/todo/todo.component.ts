import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TodoService } from "../service/todo.service";


@Component({
    selector: "my-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.css"],
})

export class TodoComponent implements OnInit {
  today : any;
  todos : any;
  constructor(private todoService: TodoService,
              private router : Router) {

  }
  ngOnInit() {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;
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
}
