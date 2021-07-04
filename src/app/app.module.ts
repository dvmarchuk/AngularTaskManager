import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

// const config = {
//   apiKey: "AIzaSyD0_nw9d8noDZZ4Ew32qfUXOT8r5zS5Hp4",
//   authDomain: "vaautoassigner.firebaseapp.com",
//   databaseURL: "https://vaautoassigner-default-rtdb.firebaseio.com",
//   projectId: "vaautoassigner",
//   storageBucket: "vaautoassigner.appspot.com",
//   messagingSenderId: "502694423021",
//   appId: "1:502694423021:web:0c66ad3dd7f2e587915fe4",
//   measurementId: "G-GVJN0Z5WP2"
// };

@NgModule({
  declarations: [ //this is for components
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [ //this is for modules
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
