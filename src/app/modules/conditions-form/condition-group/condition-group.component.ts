import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-condition-group',
  templateUrl: './condition-group.component.html',
  styleUrls: ['./condition-group.component.scss'],
})
export class ConditionGroupComponent {
  conditionForm!: FormGroup;

  @Input() control!: AbstractControl;
  @Input() groupIndex!: number;

  constructor(private fb: FormBuilder, private fgd: FormGroupDirective) {}

  ngOnInit() {
    this.conditionForm = this.fgd.control;
  }

  addCondition(control?: AbstractControl) {
    if (control == undefined) {
      this.conditionsArray.push(this.createGroup());
    } else {
      (control.get('conditions') as FormArray)!.push(this.createGroup());
    }
  }

  get conditionsArray() {
    return this.conditionForm.get('conditions') as FormArray;
  }

  getInnerConditions(control: AbstractControl) {
    return control.get('conditions') as FormArray;
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
