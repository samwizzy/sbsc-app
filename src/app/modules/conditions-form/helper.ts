import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export function patchFormArray(formArray: FormArray, values: any[], fb: FormBuilder): void {
  values.forEach((value, index) => {
    if (Array.isArray(value)) {
      // Ensure the FormArray has a FormArray at this index
      if (!formArray.at(index)) {
        formArray.push(fb.array([]));
      }
      // Recursively patch the nested array
      patchFormArray(formArray.at(index) as FormArray, value, fb);
    } else if (typeof value === 'object') {
      // Ensure the FormArray has a FormGroup at this index
      if (!formArray.at(index)) {
        formArray.push(fb.group({}));
      }
      console.log('i am an object');
      // Recursively patch the FormGroup
      patchFormGroup(formArray.at(index) as FormGroup, value, fb);
    } else {
      // For primitive values, ensure the FormArray has a FormControl at this index
      if (!formArray.at(index)) {
        formArray.push(fb.control(value));
      } else {
        formArray.at(index).setValue(value);
      }
    }
  });
}

export function patchFormGroup(
  formGroup: FormGroup,
  values: { [key: string]: any },
  fb: FormBuilder
): void {
  Object.keys(values).forEach((key) => {
    if (Array.isArray(values[key])) {
      // Ensure the FormGroup has a FormArray at this key
      if (!formGroup.get(key)) {
        formGroup.addControl(key, fb.array([]));
      }
      console.log(key, 'i am an array 1');
      // Recursively patch the nested array
      patchFormArray(formGroup.get(key) as FormArray, values[key], fb);
    } else if (typeof values[key] === 'object') {
      // Ensure the FormGroup has a FormGroup at this key
      if (!formGroup.get(key)) {
        formGroup.addControl(key, fb.group({}));
      }
      console.log(key, 'i am an object 1');
      // Recursively patch the nested object
      patchFormGroup(formGroup.get(key) as FormGroup, values[key], fb);
    } else {
      // For primitive values, ensure the FormGroup has a FormControl at this key
      if (!formGroup.get(key)) {
        formGroup.addControl(key, fb.control(values[key]));
      } else {
        formGroup.get(key)?.setValue(values[key]);
      }

      console.log(key, 'i am an else 1');
    }
  });
}
