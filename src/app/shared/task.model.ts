import { v4 as uuidv4 } from 'uuid';


export class TaskModel {
    id = uuidv4();
    taskName: string;
    priority: string;
    done: boolean;
    delete: string;

    constructor(taskName: string, priority: string, done: boolean, remove: string) {
        this.taskName = taskName;
        this.priority = priority;
        this.done = done;
        this.delete = remove;
}

}