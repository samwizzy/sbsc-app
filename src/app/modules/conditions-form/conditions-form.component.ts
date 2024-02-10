import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conditions-form',
  templateUrl: './conditions-form.component.html',
  styleUrls: ['./conditions-form.component.scss'],
})
export class ConditionsFormComponent {
  conditionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForms();

    this.conditionForm.valueChanges.subscribe(() => {
      console.log(this.conditionForm.value);
    });
  }

  createForms() {
    this.conditionForm = this.fb.group({
      conditions: this.fb.array([]),
    });
  }

  get conditionsArray() {
    return this.conditionForm.get('conditions') as FormArray;
  }

  createGroup() {
    return this.fb.group({
      type: [null],
      merge: [null],
      with: [null],
      isGroup: false,
      conditions: this.fb.array([]),
    });
  }

  trackByIndex(index: number, item: any): any {
    return item + index;
  }

  addCondition() {
    this.conditionsArray.push(this.createGroup());
  }

  removeCondition(index: number) {
    this.conditionsArray.removeAt(index);
  }
}
