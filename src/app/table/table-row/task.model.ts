export class TaskModel {
    taskName: string;
    priority: string;
    done: string;
    delete: string;

    constructor(taskName: string, priority: string, done: string, remove: string) {
        this.taskName = taskName;
        this.priority = priority;
        this.done = done;
        this.delete = remove;
}
}