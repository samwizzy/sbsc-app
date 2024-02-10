import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-recursion-form',
  templateUrl: './recursion-form.component.html',
  styleUrls: ['./recursion-form.component.scss'],
})
export class RecursionFormComponent implements OnInit {
  // @Input()
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      items: this.fb.array([]),
    });

    // Initialize the form with some data
    this.initializeForm();
  }

  get items() {
    return this.myForm.get('items') as FormArray;
  }

  getItem(item: AbstractControl) {
    return item.get('children') as FormArray;
  }

  initializeForm() {
    const initialData = [
      { name: 'Item 1', children: [{ name: 'Item 1.1', children: [] }] },
      { name: 'Item 2', children: [] },
      // Add more initial data as needed
    ];

    this.setItems(initialData, this.myForm.get('items') as FormArray);
  }

  setItems(items: any[], formArray: FormArray) {
    items.forEach((item) => {
      const group = this.fb.group({
        name: item.name,
        children: this.fb.array([]), // Recursive form array for children
      });

      console.log(item, 'item');

      if (item.children.length > 0) {
        this.setItems(item.children, group.get('children') as FormArray);
      }

      formArray.push(group);
    });
  }
}
