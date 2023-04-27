import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

const menus = [
  { id: 1, name: 'Bags', slug: 'bags' },
  { id: 2, name: 'Watch', slug: 'watch' },
  { id: 3, name: 'Shoes', slug: 'shoes' },
  { id: 4, name: 'Laptops', slug: 'laptops' },
  { id: 5, name: 'Jeans', slug: 'jeans' },
  { id: 6, name: 'Belts', slug: 'belts' },
  { id: 7, name: 'Polos', slug: 'polos' },
  { id: 8, name: 'Sneakers', slug: 'sneakers' },
  { id: 9, name: 'Suits', slug: 'suits' },
  { id: 10, name: 'Caps', slug: 'caps' },
];

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() updateData: () => void = Function;
  @Output() menuItem = new EventEmitter();

  menus: { id: number; name: string; slug: string }[] = menus;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.data, 'data from child');
  }

  selectMenu(item: string) {
    console.log(item, 'selectMenu');
    this.menuItem.emit(item);
  }
}
