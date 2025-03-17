import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, SharedModule, IonicModule,FormsModule],
  declarations: [TaskListComponent, TaskItemComponent, TaskFormComponent],
  exports: [TaskListComponent, TaskFormComponent]
})
export class TasksModule {}
