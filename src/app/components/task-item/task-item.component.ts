import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  //so we declare it as an input bc it is being passed in from tasks.component
  //@ts-ignore
  @Input() task: Task

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    console.log("double click");
    this.onToggleReminder.emit(task)//this emits the task to onToggleReminder
  }
}
