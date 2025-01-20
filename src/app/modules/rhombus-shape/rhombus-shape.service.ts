import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RhombusShapeService {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['Decision'],
      description: [null, Validators.maxLength(1000)],
      variables: this.fb.array([]),
      then: ['Then', Validators.maxLength(5)],
      else: ['Else', Validators.maxLength(5)],
      expression: [null, Validators.maxLength(5000)],
    });
  }

  getForm(): FormGroup {
    return this.form;
  }

  getPosts(): Observable<any> {
    return of([]);
  }
}
