import {TaskModel} from './task.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {

    tasksChangedSubject = new Subject<TaskModel[]>();

    private localStorageName = 'localStorageDB';

    private tasksArray: TaskModel[] = [];

    private exampleArray: TaskModel[] = [
        new TaskModel('Feed turtle', 3, false),
        new TaskModel('Vacuum', 3, false),
        new TaskModel('Wash the dishes', 2, false),
        new TaskModel('Exercise', 3, false),
        new TaskModel('Make dinner', 3, false),
        new TaskModel('Do the laundry', 1, false),
        new TaskModel('Water the flowers', 2, false),
        new TaskModel('Do shopping', 1, false)
    ];

    priorityName(priority: number): string {
        switch (priority) {
            case 1:
                return 'Low';
            case 2:
                return 'Medium';
            case 3:
                return 'High';
            default:
                return 'Unknown';
        }
    }

    initTasks(): void {
        const retrievedObject = localStorage.getItem(this.localStorageName);
        const locations: Array<TaskModel> = JSON.parse(retrievedObject);
        this.tasksArray = locations || this.exampleArray;
        if (this.tasksArray.length === 0) {
            this.tasksArray = this.exampleArray;
        }

        this.updateTasksList();
    }

    updateTask(wantedId: string, done: boolean): void {
        const updateIndex = this.tasksArray.map((item) => {
            return item.id;
        }).indexOf(wantedId);

        this.tasksArray[updateIndex].done = done;
        this.updateTasksList();
    }

    addTask(task: TaskModel): void {
        this.tasksArray.push(task);
        this.updateTasksList();
    }

    deleteTask(wantedId: string): void {
        const removeIndex = this.tasksArray.map((item) => {
            return item.id;
        }).indexOf(wantedId);

        this.tasksArray.splice(removeIndex, 1);

        this.updateTasksList();
    }

    private updateTasksList(): void {
        this.tasksChangedSubject.next(this.tasksArray.slice());
        localStorage.setItem(this.localStorageName, JSON.stringify(this.tasksArray));
    }
}



