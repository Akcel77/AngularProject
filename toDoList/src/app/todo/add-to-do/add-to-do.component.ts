import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.modele';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  todo = new Todo();

  constructor() { }

  ngOnInit(): void {
  }

}
