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

    //
    // onDelete(index: number) {
    //     this.taskService.deleteTask(index);
    // }

    // mouseEnter(){
    //     this.isDisplay = true;
    // }
    //
    // mouseLeave(){
    //     this.isDisplay = false;
    // }

}