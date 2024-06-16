import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  @Input() tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
      },
      (error) => {
        console.error('Error loading tasks:', error);
      }
    );
  }

  removeTask(task: Task) {
    console.log('task: ', task)
    this.taskService.deleteTask(task.id).subscribe(
      response => {
        this.loadTasks()
      },
      error => {
        console.error('Error creating task', error);
      }
    );
  }

  toggleCompleted(task: Task) {
    this.taskService.updateTask(task.id, !task.done).subscribe(
      response => {
        this.loadTasks()
      },
      error => {
        console.error('Error creating task', error);
      }
    );
  }
}
