import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SwitcherComponent, multi: true }],
})
export class SwitcherComponent implements ControlValueAccessor {
  active!: boolean;
  _change!: (value: any) => void;

  writeValue(value: any): void {
    this.active = !!value;
  }
  registerOnChange(fn: any): void {
    console.log('register on change');
    this._change = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('register on touched');
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('set disable state', isDisabled);
  }

  toggle(state: boolean) {
    this.active = state;
    this._change(state);
  }
}
