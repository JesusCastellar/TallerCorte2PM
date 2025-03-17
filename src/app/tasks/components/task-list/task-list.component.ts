import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone : false
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  toggleComplete(task: Task) {
    this.taskService.updateTask(task);
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }
}
