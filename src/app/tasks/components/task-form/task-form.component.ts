import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Models/task.model';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone : false
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();

  task: Task = {
    title: '',
    description: '',
    date: new Date(),
    done: false,
  };

  onSubmit() {
    if (this.task.title.trim() && this.task.description.trim()) {
      this.addTask.emit(this.task);
      this.task = { title: '', description: '', date: new Date(), done: false };
    }
  }
}
