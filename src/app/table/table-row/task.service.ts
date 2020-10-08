import {TaskModel} from './task.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {

    tasksChanged = new Subject<TaskModel[]>();
    taskDelete = new Subject<number>();


    arrayOfTasks: TaskModel[] = [
        new TaskModel('Feed turtle', 'Low', 'x', ''),
        new TaskModel('Feed turtle', 'Low', 'x', ''),
        new TaskModel('Feed turtle', 'Low', 'x', ''),
        new TaskModel('Feed turtle', 'Low', 'x', '')
    ];

    getTasks() {
        return this.arrayOfTasks.slice();
    }

    addTask(task: TaskModel) {
        this.arrayOfTasks.push(task);
        this.tasksChanged.next(this.arrayOfTasks.slice());
    }

    deleteTask(index: number) {
        this.arrayOfTasks.splice(index, 1);
        this.tasksChanged.next(this.arrayOfTasks.slice());
    }

}