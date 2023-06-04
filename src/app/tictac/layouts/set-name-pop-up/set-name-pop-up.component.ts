import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-set-name-pop-up',
  templateUrl: './set-name-pop-up.component.html',
  styleUrls: ['./set-name-pop-up.component.scss']
})
export class SetNamePopUpComponent implements OnInit {
  @Output() start =  new EventEmitter<String>();
  constructor() { }

  name:String="";

  ngOnInit(): void {
  }

  startGame(){
    this.start.emit(this.name);
  }

}
