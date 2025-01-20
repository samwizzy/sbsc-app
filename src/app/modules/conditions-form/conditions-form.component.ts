import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { patchFormArray } from './helper';

interface Condition {
  type: string;
  merge: string;
  with: string;
  isGroup: boolean;
  conditions: Condition[];
}

const data = [
  {
    type: 'String',
    merge: 'Equal',
    with: 'Nothing',
    isGroup: false,
    conditions: [],
  },
  {
    type: 'E-sign',
    merge: 'Equal',
    with: 'Nothing',
    isGroup: true,
    conditions: [
      {
        type: 'Process',
        merge: 'Equal',
        with: 'Nothing',
        isGroup: true,
        conditions: [],
      },
    ],
  },
];

@Component({
  selector: 'app-conditions-form',
  templateUrl: './conditions-form.component.html',
  styleUrls: ['./conditions-form.component.scss'],
})
export class ConditionsFormComponent {
  conditionForm!: FormGroup;

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

  patchForm() {
    patchFormArray(this.conditionsArray, data, this.fb);
  }

  /**
   *
   * @param formArray
   * @param conditions
   * recursive form mutation
   */
  patchArray(formArray: FormArray, conditions: Condition[]) {
    conditions.forEach((condition, i: number) => {
      const groupItem = this.patchConditionWithData(condition);

      formArray.push(groupItem);

      if (condition.conditions?.length) {
        this.patchGroup(formArray.at(i) as FormGroup, condition);
      }
    });
  }

  /**
   *
   * @param formGroup
   * @param condition
   */
  patchGroup(formGroup: FormGroup, condition: Condition) {
    condition.conditions.forEach((nextCondition) => {
      const groupItem = this.patchConditionWithData(nextCondition);

      (formGroup.get('childConditions') as FormArray).push(groupItem);

      if (nextCondition.conditions?.length) {
        this.patchGroup(groupItem, nextCondition);
      }
    });
  }

  patchConditionWithData(condition: Condition): FormGroup {
    return this.fb.group({
      type: [condition.type],
      merge: [condition.merge],
      with: [condition.with],
      isGroup: [condition.isGroup],
      conditions: [condition.conditions],
    });
  }

  clear() {
    this.conditionsArray.reset();

    this.clearEvent.emit();
  }
}
