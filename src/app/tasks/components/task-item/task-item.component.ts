import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Models/task.model';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone : false
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();

  onToggleComplete() {
    this.toggleComplete.emit({ ...this.task, done: !this.task.done });
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
