import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';
import { WebSocketService } from 'src/app/core/services/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss'],
})
export class WebSocketComponent implements OnInit, AfterViewInit {
  url = 'https://echo.websocket.org/';
  receivedMessages: string[] = [];
  messageControl = new FormControl(null, Validators.required);

  isResizing = false;

  @ViewChild('sidepane') sidepane!: ElementRef<HTMLElement>;
  @ViewChild('maincontent') maincontent!: ElementRef<HTMLElement>;

  constructor(private websocketService: WebSocketService) {}

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.messageInput.nativeElement, 'keydown')
      .pipe(filter((event) => event.key === 'Enter'))
      .subscribe(() => {
        this.sendMessage();
      });

    fromEvent(this.sidepane.nativeElement, 'mousedown').subscribe(() => {
      this.isResizing = true;
      document.body.style.cursor = 'ew-resize';
    });

    fromEvent<MouseEvent>(document, 'mousemove').subscribe((e) => {
      if (this.isResizing) {
        const newWidth = `${e.clientX}px`;
        const documentWidth = document.body.clientWidth;
        const mainWidth = `${documentWidth - e.clientX}px`;

        this.sidepane.nativeElement.style.width = newWidth;
        this.maincontent.nativeElement.style.width = mainWidth;
        this.maincontent.nativeElement.style.marginLeft = newWidth;
      }
    });

    fromEvent(document, 'mouseup').subscribe(() => {
      this.isResizing = false;
      document.body.style.cursor = 'default';
    });
  }

  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.websocketService.connect(this.url);

    this.websocketService.getMessages().subscribe((response) => {
      this.receivedMessages.push(response as string);
    });
  }

  sendMessage() {
    this.websocketService.sendMessage(this.messageControl.value);
    this.messageControl.reset();
  }
}
