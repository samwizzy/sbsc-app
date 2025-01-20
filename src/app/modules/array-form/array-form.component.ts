import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss'],
})
export class ArrayFormComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  activeFragment = this.route.fragment.pipe(share());
  typesOfShoes = ['Calvin', 'Dolce', 'Lois', 'Martini'];

  selected = 'Lois';

  @Output() eventClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('shoes') shoes!: MatSelectionList;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.createForm();

    this.form.get('conditions')?.removeValidators(Validators.required);

    this.form.get('conditions')?.validator;

    this.route.url.subscribe((url: UrlSegment[]) => {
      console.log(url, 'url');
    });
  }

  ngAfterViewInit(): void {
    const selected = new SelectionModel(true, ['l2h']);

    this.shoes.selectedOptions.select();
  }

  onSelectChange(event: MatSelectionListChange) {
    console.log(event.source.selectedOptions.selected[0].value);
  }

  clickEvent(): void {
    this.eventClick.emit();
  }

  createForm() {
    this.form = this.fb.group({
      conditions: this.fb.array([new FormControl(null)]),
    });
  }

  get conditionsCtrl() {
    return this.form.get('conditions') as FormArray;
  }

  addCondition() {
    this.conditionsCtrl.push(new FormControl());
  }

  removeCondition(index: number) {
    this.conditionsCtrl.removeAt(index);
  }
}
