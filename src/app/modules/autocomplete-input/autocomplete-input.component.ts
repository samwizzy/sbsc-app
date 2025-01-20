import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Observable, combineLatest, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class AutocompleteInputComponent {
  form!: FormGroup;

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.buildForm();

    this.filteredFruits = combineLatest([
      this.fruitCtrl.valueChanges,
      this.f['topping'].valueChanges,
    ]).pipe(
      startWith([null, null]),
      tap(([fruit, topping]) => console.log(fruit, topping)),
      map(([fruit, topping]: (string | null)[]) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }

  get f() {
    return this.form.controls;
  }

  get toppings() {
    return this.f['topping'];
  }

  get fruitsList() {
    return this.form.get('fruits') as FormArray;
  }

  buildForm() {
    this.form = this.fb.group({
      topping: [null],
      fruit: [null],
      fruits: this.fb.array([]),
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
      this.fruitsList.push(this.fb.control(value));
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    const idx = this.fruitsList.controls.findIndex((c) => c.value === fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.fruitsList.removeAt(idx);
    }
  }

  removeControl(fruit: AbstractControl): void {
    const index = this.fruitsList.controls.indexOf(fruit);

    if (index >= 0) {
      this.fruitsList.removeAt(index);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitsList.push(this.fb.control(event.option.viewValue));
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  handleSelect(event: MatSelectChange) {
    // console.log(event.value);
    // this.filteredFruits = of(event.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) => fruit.toLowerCase().includes(filterValue));
  }
}
