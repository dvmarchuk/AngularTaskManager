import { Component, OnInit } from '@angular/core';
import {Task} from "../../task";
import {TaskService} from "../../services/task.service";

// import {TASKS} from "../../mock-tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //this is called from the HTML in ngFor
  //it makes a variable called task and then loops over tasks array. It takes tasks which is an array of Task[] that is filled with mock_tasks from TASKS
  //loops over it and put it all into the html

  tasks: Task[] = [];

//to use a service you have to add it as a provider to the constructor
  constructor(private taskService :TaskService) { }

  ngOnInit(): void {
    //here he used the constructor to init taskService as a service from TaskService and then we called tasks from above and let everything from taskService equal it.
       //this.tasks = this.taskService.getTask();
    //this should be set as an observable though

    //you have to subscribe to an observable bc you always have to watch it.
    this.taskService.getTask().subscribe((tasks)=> this.tasks = tasks);

  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).
    subscribe(()=> this.tasks = this.tasks.filter(t => t.id !== task.id)); //this filters it out of the UI but can be done better
    //the subscribe is basically like a .then
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
    //we call the service and pass in the task. That task get processed and returned to us but we will still need it so
    // we put it into the subscribe and push it into the tasks array so that it'll display with push.
  }
}
