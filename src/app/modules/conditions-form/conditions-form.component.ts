import { Component, EventEmitter, Output } from '@angular/core';
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
    comparison_operator: 'string', // AND || OR
    isGroup: 'boolean',
    conditions: [],
  };

  @Output() clearEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('parent initialized');
    this.createForms();
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

  createGroup = () => {
    return this.fb.group({
      type: [null],
      merge: [null],
      with: [null],
      isGroup: false,
      conditions: this.fb.array([]),
    });
  };

  addCondition() {
    this.conditionsArray.push(this.createGroup());
  }

  clear() {
    this.conditionForm.reset(null);
    this.conditionsArray.reset();

    this.clearEvent.emit();
  }
}
