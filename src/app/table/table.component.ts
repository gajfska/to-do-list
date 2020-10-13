import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {TaskModel} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import {Subscription} from 'rxjs';
import {MatSort} from '@angular/material/sort';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements AfterViewInit, OnInit, OnDestroy {


    hoveredOnTaskUUID?: string;
    dataSource: any;
    displayedColumnsKeys: string[] = ['taskName', 'priority', 'done', 'delete'];

    private subscription: Subscription;

    constructor(private taskService: TaskService) {
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(): void {
        this.subscription = this.taskService.tasksChangedSubject
            .subscribe(
                (tasks: TaskModel[]) => {
                    this.dataSource.data = tasks;
                }
            );

        this.dataSource = new MatTableDataSource([]);
        this.taskService.initTasks();
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    checkboxChange(task: TaskModel): void {
        const isDone = !task.done;
        this.taskService.updateTask(task.id, isDone);
    }

    // MARK: Delete button

    mouseEnter(row): void {
        this.hoveredOnTaskUUID = row.id;
    }

    mouseLeave(): void {
        this.hoveredOnTaskUUID = null;
    }

    isHoverOn(row): boolean {
        return row.id === this.hoveredOnTaskUUID;
    }

    onDelete(id: string): void {
        this.taskService.deleteTask(id);
    }

    // MARK: Getter

    priorityName(priority: number): string {
        return this.taskService.priorityName(priority);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
