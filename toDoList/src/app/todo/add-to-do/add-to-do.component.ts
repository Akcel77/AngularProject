import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.modele';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  todo = new Todo();

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoService.addTodo(this.todo);
    this.router.navigate(['todo']);
  }
}
