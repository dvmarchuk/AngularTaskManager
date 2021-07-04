import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //so this file is to make our add and collapse button work. Where we import Observable and Subject. Subject is so that
  //we can use it like a universal. Subject can do the equivalent of prop drilling where we set data in many different files
  //at the same time. So here we are setting the toggleAddTask value to either true or false and will use subject to prop drill
  //into all of our different components. In toggleAddTask() we set showAddTask boolean to the opposite and then send it
  //into the subject prop with .next. Then will onToggle we can return the subject with new info

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //this will fire off when we toggle
  //why we separate it into two parts is bc we leave toggleAddTask here to handle the logic when we click the button butttt
  //we need to do the 'prop drilling' so to do that we will need to have onToggle as an observable so it updates and we will
  //need to put onToggle in the different components that will be affected so that we can update.
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
