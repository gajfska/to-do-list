import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {TaskModel} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import {Observable, Subscription} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {DataSource} from '@angular/cdk/table';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements AfterViewInit, OnInit, OnDestroy{


    displayedColumns: string[] = ['taskName', 'priority', 'done', 'delete'];

    checked = false;
    arrayOfTasks: TaskModel[] = [];
    indexTask: number;
    private subscription: Subscription;
    dataSource: any;
    isDisplay?: string;


    constructor(private taskService: TaskService) {}


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort



    ngOnInit() {
        this.arrayOfTasks = this.taskService.getTasks();
        this.subscription = this.taskService.tasksChanged
            .subscribe(
                (tasks: TaskModel[]) => {
                    this.dataSource.data = tasks;
                }
            );
        this.subscription = this.taskService.taskDelete
            .subscribe(
                (index: number) => {
                    this.indexTask = index;
                }
            );
        this.dataSource = new MatTableDataSource(this.arrayOfTasks);
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    mouseEnter(row){
        this.isDisplay = row.id;
    }

    mouseLeave(row){
        this.isDisplay = null;
    }

        isHoverOn(row): boolean {
        return row.id === this.isDisplay;
    }

    onDelete(id: string){
        this.taskService.deleteTask(id);
    }

    // onSort() {
    //     this.taskService.sortingTask();
    // }

    // mouseEnter(index: number){
    //     this.showButton(index)
    //     console.log('enter');
    // }
    //
    // mouseLeave(index: number){
    //     this.isDisplay = false;
    //     console.log('leave');
    //
    // }

    // showButton(index: number) {
    //     this.isDisplay = true;
    // }

    // onDelete(index: number){
    //     this.taskService.deleteTask(index);
    // }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }



}

export class UserDataSource extends DataSource<any> {
    constructor(private userService: TaskService) {
        super();
    }
    connect(): Observable<TaskModel[]> {
        return this.userService.tasksChanged;
    }
    disconnect() {}
}