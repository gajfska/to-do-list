import {TaskModel} from './task.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class TaskService {

    tasksChanged = new Subject<TaskModel[]>();
    taskDelete = new Subject<number>();


    arrayOfTasks: TaskModel[] = [];

    defaultArray: TaskModel[] =  [
        new TaskModel('Feed turtle', 'High', false, ''),
        new TaskModel('Vacuum', 'Medium', false, ''),
        new TaskModel('Wash the dishes', 'Medium', false, ''),
        new TaskModel('Exercise', 'Low', false, ''),
        new TaskModel('Make dinner', 'High', false, ''),
        new TaskModel('Do the laundry', 'Low', false, ''),
        new TaskModel('Water the flowers', 'Low', false, ''),
        new TaskModel('Do shopping', 'High', false, '')
    ];

    getTasks() {
        let retrievedObject = localStorage.getItem('testObject');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        let locations: Array<TaskModel> = JSON.parse(retrievedObject);
        this.arrayOfTasks = locations || this.defaultArray;
        return this.arrayOfTasks.slice();
    }

    addTask(task: TaskModel) {
        this.arrayOfTasks.push(task);
        this.tasksChanged.next(this.arrayOfTasks.slice());
        localStorage.setItem('testObject', JSON.stringify(this.arrayOfTasks));
    }

    deleteTask(wantedId: string) {
        const removeIndex = this.arrayOfTasks.map((item) => {
                return item.id;
            }).indexOf(wantedId);
        this.arrayOfTasks.splice(removeIndex, 1);
        this.tasksChanged.next(this.arrayOfTasks.slice());
        localStorage.setItem('testObject', JSON.stringify(this.arrayOfTasks));
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