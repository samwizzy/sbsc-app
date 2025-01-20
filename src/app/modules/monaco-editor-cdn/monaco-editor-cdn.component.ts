import { Component } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';

@Component({
  selector: 'app-monaco-editor-cdn',
  templateUrl: './monaco-editor-cdn.component.html',
  styleUrls: ['./monaco-editor-cdn.component.scss'],
})
export class MonacoEditorCdnComponent {
  code = `{
    "name": "Samuel",
    "email": "sam@gmail.com"
  }`;

  employees = [
    {
      id: 1,
      name: 'Samuel Okeke',
      email: 'sam@gmail.com',
      age: 33,
      address: '6219 Baker Divide\nNew Jacob, DC 44270',
    },
    {
      id: 2,
      name: 'Paul Okeke',
      email: 'paul@gmail.com',
      age: 28,
      address: '6219 Baker Divide\n New Jacob, DC 44270',
    },
    {
      id: 3,
      name: 'David Okeke',
      email: 'david@gmail.com',
      age: 30,
      address: '6219 Baker Divide\n New Jacob, DC 44270',
    },
  ];

  ngOnInit() {
    from(this.employees)
      .pipe(concatMap((emp) => of(emp).pipe(delay(10000))))
      .subscribe((emp) => {
        this.code = JSON.stringify(emp, null, 2);
      });
  }
}
