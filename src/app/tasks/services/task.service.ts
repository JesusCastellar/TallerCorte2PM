import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksCollection = collection(this.firestore, 'tasks');

  constructor(private firestore: Firestore) {}

 
  addTask(task: Task): Promise<void> {
    return addDoc(this.tasksCollection, task).then(() => Promise.resolve());
  }

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  
  updateTask(task: Task): Promise<void> {
    const taskDoc = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDoc, { ...task }) as Promise<void>;
  }


  deleteTask(taskId: string): Promise<void> {
    const taskDoc = doc(this.firestore, `tasks/${taskId}`);
    return deleteDoc(taskDoc) as Promise<void>;
  }


  
}
