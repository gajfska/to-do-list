import {Component, Input} from '@angular/core';
import {TaskModel} from '../../shared/task.model';
import {TaskService} from '../../shared/task.service';

@Component({
    selector: 'app-table-row',
    templateUrl: './table-row.component.html'
})

export class TableRowComponent {

    @Input() task: TaskModel;
    @Input() index: number;

    isDisplay = false;


    constructor(private taskService: TaskService) {}


    tasks = [
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


    onDelete(index: number) {
        this.taskService.deleteTask(index);
    }

    mouseEnter(){
        this.isDisplay = true;
        console.log('enter');
    }

    mouseLeave(){
        this.isDisplay = false;
        console.log('leave');

    }

}