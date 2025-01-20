import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: WebSocket | undefined;
  websocketSubject = new Subject();

  constructor() {}

  connect(url: string): void {
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event: MessageEvent) => {
      this.websocketSubject.next(event.data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  sendMessage(message: any) {
    if (this.socket && this.socket.readyState && WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not connected');
    }
  }

  getMessages() {
    return this.websocketSubject.asObservable();
  }

  disconnect() {
    if (this.socket) {
      this.socket?.close();
      this.socket = undefined;
    }
  }
}
