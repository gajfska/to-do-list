import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TaskModel} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {
    @ViewChild('f', { static: false }) slForm: NgForm;

    defoultPriority = 'high';

    constructor(private taskService: TaskService) {}

    onSubmit(form: NgForm) {
        const value = form.value;
        const newTask = new TaskModel(value.name, value.priority, '', '');
        this.taskService.addTask(newTask);
        form.reset();
        console.log('lo: ' + value.name + ' ' + value.priority);
    }

}