import {
  AfterContentChecked,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit, AfterContentChecked, OnDestroy {
  @Input() name: string = '';

  @HostBinding('id') @Input() id!: string;
  @ContentChild('karma') karma!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    console.log('Text component initiated');
  }

  ngAfterContentChecked(): void {
    console.log('content checked: ', this.karma.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('Text component destroyed');
  }
}
