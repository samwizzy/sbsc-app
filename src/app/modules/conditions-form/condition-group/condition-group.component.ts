import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-condition-group',
  templateUrl: './condition-group.component.html',
  styleUrls: ['./condition-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ConditionGroupComponent {
  @Input() parentArray!: FormArray;
  @Input() group!: FormGroup;
  @Input() nextIndex!: number;
  @Input() createGroup!: () => void;

  ngOnInit() {
    console.log('child initialized');
  }

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

  removeRootCondition(index: number) {
    this.parentArray.removeAt(index);
  }

  removeCondition(index: number) {
    this.getInnerConditions(this.group).removeAt(index);
  }
}
