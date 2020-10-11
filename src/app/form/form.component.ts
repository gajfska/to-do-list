import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TaskModel} from '../shared/task.model';
import {TaskService} from '../shared/task.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {
    @ViewChild('f', { static: false }) slForm: NgForm;


    selected = 'High';

    constructor(private taskService: TaskService) {}

    onSubmit(form: NgForm) {
        const value = form.value;
        const nameTask = this.capitalizeFirstLetter(value.name.trim());
        const newTask = new TaskModel(nameTask, value.priority, false, '');
        this.taskService.addTask(newTask);
        form.resetForm();
    }

    capitalizeFirstLetter(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}