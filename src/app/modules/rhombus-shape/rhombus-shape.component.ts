import { Component } from '@angular/core';
import { RhombusShapeService } from './rhombus-shape.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rhombus-shape',
  templateUrl: './rhombus-shape.component.html',
  styleUrls: ['./rhombus-shape.component.scss'],
})
export class RhombusShapeComponent {
  decisionForm!: FormGroup;
  subscription = new Subscription();

  constructor(private decisionService: RhombusShapeService) {}

  ngOnInit(): void {
    this.decisionForm = this.decisionService.getForm();
  }

  get decisionName() {
    return this.decisionForm.get('name')?.value;
  }

  get thenValue() {
    return this.decisionForm.get('then')?.value;
  }

  get elseValue() {
    return this.decisionForm.get('else')?.value;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
