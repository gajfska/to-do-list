import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {TaskModel} from './table-row/task.model';
import {TaskService} from './table-row/task.service';
import {Subscription} from 'rxjs';


export interface TaskElement {
    taskName: string;
    priority: string;
    done: string;
    delete: string;
}


const ELEMENT_DATA: TaskElement[] = [
    { taskName: 'Feed turtle', priority: 'Low', done: 'x', delete: ''},
    { taskName: 'Vacuum', priority: 'Medium', done: 'x', delete: ''},
    { taskName: 'Wash the dishes', priority: 'Low', done: 'x', delete: ''},
    { taskName: 'Make dinner', priority: 'Low', done: 'x', delete: ''},
    { taskName: 'Exercise', priority: 'Medium', done: 'x', delete: ''},
    { taskName: 'Do the laundry', priority: 'Low', done: 'x', delete: ''},
    { taskName: 'Water the flowers', priority: 'High', done: 'x', delete: ''},
    { taskName: 'Do shopping', priority: 'High', done: 'x', delete: ''},
    { taskName: 'Play board games', priority: 'Medium', done: 'x', delete: ''},
    { taskName: 'Take a nap', priority: 'Medium', done: 'x', delete: ''},
];

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements AfterViewInit, OnInit, OnDestroy{


    displayedColumns: string[] = ['taskName', 'priority', 'done', 'delete'];
    dataSource = new MatTableDataSource<TaskElement>(ELEMENT_DATA);
    checked = false;
    isDisplay = false;
    arrayOfTasks: TaskModel[] = [];
    indexTask: number;
    private subscription: Subscription;


    constructor(private taskService: TaskService) {}


    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.arrayOfTasks = this.taskService.getTasks();
        this.subscription = this.taskService.tasksChanged
            .subscribe(
                (tasks: TaskModel[]) => {
                    this.arrayOfTasks = tasks;
                }
            );
        this.subscription = this.taskService.taskDelete
            .subscribe(
                (index: number) => {
                    this.indexTask = index;
                }
            );
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    mouseEnter(){
        this.isDisplay = true;
        console.log('enter');
    }

    mouseLeave(){
        this.isDisplay = false;
        console.log('leave');

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }



}