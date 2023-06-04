import { Injectable } from '@angular/core';

declare var SockJS:any;
declare var Stomp:any;


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  constructor() { }

  public stompClient:any;
  public msg = [];

  initializeWebSocketConnection() {
    const serverUrl = "http://localhost:81/socket";
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
  
    const that = this; 

    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/topic/welcome', (message:any) => {
          console.log(message.body,"-------------------------")
      });
    }, (error:any) => {
      console.error('Error connecting to WebSocket server:', error);
    });
  }




  sendMessage(name:String) {
    this.stompClient.send('/app/login' , {}, name);
  }

}
