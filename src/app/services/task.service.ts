import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
//we bring in both httpsclient and httpheaders so we can use the client and the headers when working with our localhost backend set
//We have to then also add it to app.module and as a httpClientMODULE to use it as a module not just as a component

import { AngularFirestore } from '@angular/fire/firestore';

import {Observable, of} from "rxjs";
import {Task} from "../task";
// import {TASKS} from "../mock-tasks";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) {
    // const things = db.collection('vaautoassigner-default-rtdb').valueChanges();
    // things.subscribe(console.log);
  }


  //we will call this getTasks() from our component instead of directly bringing it in bc it will be coming from our backend
  getTask(): Observable<Task[]>{
    //we then set the type of observable to <Task[]> and since it wants to return an observable we used of(TASKS) that made it into an observable so we could return it
          // const tasks = of(TASKS);
          // return tasks;

    return this.http.get<Task[]>(this.apiUrl)
  }

  // export class SomeComponent {
  //   const things = db.collection('things').valueChanges();
  //   things.subscribe(console.log);
  // }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }



  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions); //maybe put httpOptions here but idk
  }

  addTask(task: Task) :Observable<Task> {
    // const url = `${this.apiUrl}/${task.id}`;
    return this.http.post<Task>(this.apiUrl, task, httpOptions ); //maybe put httpOptions here but idk
  }


}
