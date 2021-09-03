import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './service/todo.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoComponent } from './todo/add-to-do/add-to-do.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const ROUTES : Routes = [
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
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddToDoComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
