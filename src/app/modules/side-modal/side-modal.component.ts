import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-side-modal',
  templateUrl: './side-modal.component.html',
  styleUrls: ['./side-modal.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.25s cubic-bezier(0.19, 1, 0.22, 1)', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('.25s cubic-bezier(0.19, 1, 0.22, 1)', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class SideModalComponent implements OnChanges, OnDestroy {
  @Input() data!: any;
  @Output() closeEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('first');
  }

  ngOnDestroy(): void {
    console.log('SideModalComponent destroyed');
  }

  onClose() {
    this.closeEvent.emit();
  }
}
