import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assembly-list',
  templateUrl: './assembly-list.component.html',
  styleUrls: ['./assembly-list.component.scss'],
})
export class AssemblyListComponent {
  @Input() stages = ['Idea', 'Development', 'Testing', 'Deployment'];

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  items: { [index: number]: string[] } = {};

  onEnter() {
    const value = this.inputRef.nativeElement.value;

    if (value) {
      this.items[0] ? this.items[0].push(value) : (this.items[0] = [value]);
    }

    this.inputRef.nativeElement.value = '';
  }

  moveToNext(i: number, item: string) {
    const idx = this.items[i].findIndex((val) => val === item);

    this.items[i].splice(idx, 1);
    this.items[i + 1] ? this.items[i + 1].unshift(item) : (this.items[i + 1] = [item]);
  }

  moveToPrevious(event: Event, i: number, item: string) {
    event.preventDefault();

    const idx = this.items[i].findIndex((val) => val === item);
    this.items[i].splice(idx, 1);
    this.items[i - 1] ? this.items[i - 1].push(item) : (this.items[i - 1] = [item]);
  }
}
