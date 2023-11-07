import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  data: {id: number,title:string, description:string,completed: boolean} | undefined = undefined;

  constructor(private TaskService: TaskService, private router: ActivatedRoute){
    this.router.params.subscribe((params)=>{
      const todoId = +params['id'];
      this.data = this.TaskService.getDynamicTask(todoId);
    })
  }


}
