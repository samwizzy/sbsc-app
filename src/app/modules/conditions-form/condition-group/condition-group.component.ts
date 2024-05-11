import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-condition-group',
  templateUrl: './condition-group.component.html',
  styleUrls: ['./condition-group.component.scss'],
})
export class ConditionGroupComponent {
  // conditionForm!: FormGroup;

  @Input() group!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  addCondition(control?: AbstractControl) {
    if (control == undefined) {
      this.conditionsArray.push(this.createGroup());
    } else {
      (control.get('conditions') as FormArray).push(this.createGroup());
    }
  }

  get conditionsArray() {
    return this.group.get('conditions') as FormArray;
  }

  subConditionsArray(group: FormGroup) {
    return group.get('conditions') as FormArray;
  }

  getInnerConditions(control: AbstractControl) {
    return control.get('conditions') as FormArray<FormGroup>;
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
}
