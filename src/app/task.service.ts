import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task: {id: number,title:string, description:string,completed: boolean}[] = [];

  getTask(){
    return this.task;
  }

  getDynamicTask(id:number){
    let single = this.task.find((ele)=> ele.id === id);
    return single;
  }

  addTask(data: {id: number,title:string, description:string,completed: boolean}){
    this.task.push(data);
  }

  deleteTask(id:number){
    this.task = this.task.filter((ele)=> ele.id!==id);
  }

  updateTask(id:number){
    this.task = this.task.map((ele)=> ele.id===id ? {...ele, completed: !ele.completed}: ele);
  }
}
