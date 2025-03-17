import { Component } from '@angular/core';
import { TaskService } from './tasks/services/task.service';
import { Task } from './tasks/Models/task.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public taskService: TaskService) {}
}
