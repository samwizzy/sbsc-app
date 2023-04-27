import { Component, OnInit } from '@angular/core';

const mock = {
  id: 1,
  name: 'Samuel',
  age: 32,
};

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.scss'],
})
export class ParantComponent implements OnInit {
  data: any;
  selectItem: string = '';

  constructor() {}

  ngOnInit(): void {}

  updateData = () => {
    this.data = this.addProp(mock);
  };

  addProp(obj: {}) {
    return Object.assign(obj, { email: 'sam@gmail.com' });
  }

  getMenuItem(item: string) {
    this.selectItem = item;
  }
}
