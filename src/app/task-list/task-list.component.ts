import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private TaskService: TaskService){}

  data: {id: number,title:string, description:string,completed: boolean}[] = [];

  ngOnInit(){
    this.data = this.TaskService.getTask();
    console.log(this.data);
    
  }

  updateTodo(id: number){
    this.TaskService.updateTask(id);
    this.data = this.TaskService.getTask();
  }

  deleteTodo(id:number){
    this.TaskService.deleteTask(id);
    this.data = this.TaskService.getTask();
  }
}
