import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-condition-group',
  templateUrl: './condition-group.component.html',
  styleUrls: ['./condition-group.component.scss'],
})
export class ConditionGroupComponent {
  @Input() parentArray!: FormArray;
  @Input() group!: FormGroup;
  @Input() nextIndex!: number;

  constructor(private fb: FormBuilder) {}

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

  removeRootCondition(index: number) {
    this.parentArray.removeAt(index);
  }

  removeCondition(index: number) {
    this.getInnerConditions(this.group).removeAt(index);
  }
}
