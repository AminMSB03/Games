import { Player } from '../modules/Player.model';
import { MessageService } from '../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-core',
  templateUrl: './game-core.component.html',
  styleUrls: ['./game-core.component.scss']
})
export class GameCoreComponent implements OnInit {

  constructor(private messageService:MessageService) { }
  board:string[][] = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];

  player1:Player = new Player();
  player2:Player = new Player();

  openSetNamePopUp:boolean=true;

  
  play(row:number,col:number){
    this.board[row][col]="x";
  }

  ngOnInit(): void {
    this.messageService.initializeWebSocketConnection();
    this.player1.name="Player1";
    this.player2.name="Player2";
  }

  start(name:String){
    if(this.player1.name=="Player1"){
      this.player1.name=name;
      this.player1.shape="x";
      this.player1.isYourTurn=true;
    }else{
      this.player2.name=name;
      this.player2.shape="x";
      this.player2.isYourTurn=true;
    }
    this.messageService.sendMessage(name);
    this.openSetNamePopUp=false;
  }











  // getRandomInt(min:number, max:number) : number{
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min; 
  // }

}
