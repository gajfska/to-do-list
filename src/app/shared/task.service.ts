import {TaskModel} from './task.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class TaskService {

    tasksChanged = new Subject<TaskModel[]>();
    taskDelete = new Subject<number>();


    arrayOfTasks: TaskModel[] = [
        new TaskModel('Feed turtle', 'High', 'x', ''),
        new TaskModel('Vacuum', 'Medium', 'x', ''),
        new TaskModel('Wash the dishes', 'Medium', 'x', ''),
        new TaskModel('Exercise', 'Low', 'x', ''),
        new TaskModel('Make dinner', 'High', 'x', ''),
        new TaskModel('Do the laundry', 'Low', 'x', ''),
        new TaskModel('Water the flowers', 'Low', 'x', ''),
        new TaskModel('Do shopping', 'High', 'x', '')
    ];

    getTasks() {
        return this.arrayOfTasks.slice();
    }

    addTask(task: TaskModel) {
        this.arrayOfTasks.push(task);
        this.tasksChanged.next(this.arrayOfTasks.slice());
    }

    deleteTask(wantedId: string) {
        const removeIndex = this.arrayOfTasks.map((item) => {
                return item.id;
            }).indexOf(wantedId);
        this.arrayOfTasks.splice(removeIndex, 1);
        this.tasksChanged.next(this.arrayOfTasks.slice());
    }

    sortingTask() {
        // let currentArray = this.arrayOfTasks.slice();
        // let sortedArray =  currentArray.sort((a, b) => {
        //     if (a['taskName'] > b['taskName']){
        //         return 1;
        //     }
        //     else {
        //         return -1;
        //     }
        // });
        // this.tasksChanged.next(sortedArray);

    }

}