import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//here we add input


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  // @ts-ignore
  @Input() text: string;
  // @ts-ignore
  @Input() color: string;
  //we make these variable and announce them here and then we use them in the HTML button component
  //we declare these variables in app.module.ts

  @Output() btnClick = new EventEmitter();//we use this to make the button reusable and not manually entering information
//we set this up as an output bc it outputs info

  constructor() { }

  ngOnInit(): void {
  }

  //we define this function name in button.component.html
  //We define the info we are sending in through header.component.html
  onClick(){
    this.btnClick.emit()
    //here this onclick method gets called from the HTML part
    //the btnClick that this runs is a method that was defined with an @Output that accepts information from
    //the header where the button is set up.
    //In the header when a (btnClick) happens it calls the toggleAddTask() which then gets called out by this function with this.btnClick.emit()
  }

}
