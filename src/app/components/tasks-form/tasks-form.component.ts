import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
import { TaskService } from '../../services/task.service';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html'
})
export class TasksFormComponent implements OnInit {

 TaskListClass = new TasksListComponent(this.taskService);

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  tasks: Task[] = []; 
  newTask: string = ''; 

  addTask() {
    if (this.newTask) {
      this.taskService.createTask(this.newTask, false).subscribe(
        response => {
          console.log('Task created successfully', response);
          window.location.reload()
        },
        error => {
          console.error('Error creating task', error);
        }
      );
    } else {
      console.error('Task name is required');
    }
  }

}
