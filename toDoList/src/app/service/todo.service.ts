import { Injectable } from "@angular/core";

@Injectable()
export class TodoService{
  todoStatus : any;
  todos : any;
  today = new Date();
  todoSlice;

  constructor() {


    this.todos = new Promise((resolve, reject) => {
      const data = [
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
      if(data.length){
        setTimeout(() =>{
          this.todoSlice = data;
           resolve(data)},
           1000);
      }else{
        reject("pas de donnees disponibles");
      }
    });
  }

  onChangeStatus(i :number) {
    this.todoSlice[i].todoStatus = !this.todoSlice[i].todoStatus;
  }

  onChangeIsModified(i :number) {
    this.todoSlice[i].isModified = !this.todoSlice[i].isModified;
  }

  getTodo(index :number) {
    if (this.todoSlice[index]) {
      return this.todoSlice[index];
    }
    return false;
  }


}
