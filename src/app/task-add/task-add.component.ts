import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  constructor(private TaskService: TaskService){}

  id: number = 0;
  
  data: {id:number,title:string, description: string, completed: boolean} = {
    id: this.id,
    title:"",
    description:"",
    completed: false
  };

  addTask(form: NgForm){
    if(form.valid){
      this.TaskService.addTask(this.data);
      this.id++;
      this.data = {id: this.id, title:"",description:"", completed: false}
    
    }
  }
}
