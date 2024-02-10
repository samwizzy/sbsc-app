import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss'],
})
export class ArrayFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      conditions: this.fb.array([new FormControl(null)]),
    });
  }

  get conditionsCtrl() {
    return this.form.get('conditions') as FormArray;
  }

  addCondition() {
    this.conditionsCtrl.push(new FormControl());
  }

  removeCondition(index: number) {
    this.conditionsCtrl.removeAt(index);
  }
}
