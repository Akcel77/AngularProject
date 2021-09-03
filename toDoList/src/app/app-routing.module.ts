import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { AddToDoComponent } from './todo/add-to-do/add-to-do.component';
import { TodoComponent } from './todo/todo.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const ROUTES : Routes = [
  {path: '', component: TodoComponent },
  {path : 'home', component : HomeComponent},
  {path : 'todo', component : TodoComponent},
  {path : 'add-todo', component : AddToDoComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'users', component : UsersComponent},
  {path : 'add-user', component : AddUserComponent},
  {path : 'not-found', component : NotFoundComponent},
  {path : 'single-todo/:id', component : SingleTodoComponent},
  {path : '**', redirectTo : 'not-found'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
