import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-core',
  templateUrl: './game-core.component.html',
  styleUrls: ['./game-core.component.scss']
})
export class GameCoreComponent implements OnInit {

  constructor() { }
  board:string[][] = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];


  ngOnInit(): void {

  }


  // getRandomInt(min:number, max:number) : number{
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min; 
  // }

}
