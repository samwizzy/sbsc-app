import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conditions-form',
  templateUrl: './conditions-form.component.html',
  styleUrls: ['./conditions-form.component.scss'],
})
export class ConditionsFormComponent {
  conditionForm!: FormGroup;

  schema = {
    id: 'string', // guid i.e nanoid/uuid
    objectName: 'RequestObject', // Process
    objectId: 'RequestObjectId', // ProcessId
    type: 'string', // query type || left-operand,
    value: 'string', // query value || right-operand,
    comparison_operator: 'string', // AND / OR
    isGroup: 'boolean',
    conditions: [],
  };

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
    return this.conditionForm.get('conditions') as FormArray<FormGroup>;
  }

  subConditionsArray(group: AbstractControl) {
    return (group.get('conditions') as FormArray).controls;
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

  /**
   * AbstractControl represent FormGroup
   * in this instance
   * @param item: FormGroup
   */
  addSubCondition(item: AbstractControl) {
    const conditions = item.get('conditions') as FormArray;

    conditions.push(this.createGroup());
  }

  removeCondition(index: number) {
    this.conditionsArray.removeAt(index);
  }

  removeSubCondition(index: number, subIndex: number) {
    const conditions = this.conditionsArray.at(index).get('conditions') as FormArray;
    conditions.removeAt(subIndex);
  }
}
