import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface TaskElement {
    taskName: string;
    priority: string;
    done: string;
}


const ELEMENT_DATA: TaskElement[] = [
    { taskName: 'Feed turtle', priority: 'Low', done: 'x'},
    { taskName: 'Vacuum', priority: 'Medium', done: 'x'},
    { taskName: 'Wash the dishes', priority: 'Low', done: 'x'},
    { taskName: 'Make dinner', priority: 'Low', done: 'x'},
    { taskName: 'Exercise', priority: 'Medium', done: 'x'},
    { taskName: 'Do the laundry', priority: 'Low', done: 'x'},
    { taskName: 'Water the flowers', priority: 'High', done: 'x'},
    { taskName: 'Do shopping', priority: 'High', done: 'x'},
    { taskName: 'Play board games', priority: 'Medium', done: 'x'},
    { taskName: 'Take a nap', priority: 'Medium', done: 'x'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'to-do-list';


  displayedColumns: string[] = ['taskName', 'priority', 'done'];
  dataSource = new MatTableDataSource<TaskElement>(ELEMENT_DATA);
  checked = false;


}
