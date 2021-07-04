import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'AngularRefresh';
  // @ts-ignore
  showAddTask: boolean;

  // @ts-ignore
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value => (this.showAddTask = value)));
  } //this runs when the component is intilizaed


  ngOnInit(): void { //a life cycle method when we want to initialize doe if we want it to run when the component loads
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }


}
