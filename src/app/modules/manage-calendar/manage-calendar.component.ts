import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  // AbstractControlOptions,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  // ValidationErrors,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { generateHoursInterval } from 'src/app/core/utils/helpers';

@Component({
  selector: 'app-manage-calendar',
  templateUrl: './manage-calendar.component.html',
  styleUrls: ['./manage-calendar.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.25s ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ManageCalendarComponent implements OnInit {
  calendarForm!: FormGroup;
  selectedCalendar = new BehaviorSubject<any | null>(null); // hot observable
  shouldAddHolidayCtrl = new FormControl(false);

  calendars = [{ title: 'Default 9 - 5 calendar' }, { title: 'My work calendar' }];
  timezones = [
    { title: '(GMT + 1:00) Lagos' },
    { title: '(GMT + 1:00) Lagos' },
    { title: '(GMT + 1:00) Lagos' },
  ];

  interval = 30; // minutes interval
  startDate = 60 * 0; // start time in minutes
  endDate = 60 * 21; // end time in minutes
  hours = generateHoursInterval(this.startDate, this.endDate, this.interval);

  weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  frequencies = ['One-time', 'Annually'];

  @Input() data!: any;
  @Input() closeModal!: () => void;

  @Output() closeEvent = new EventEmitter();

  @ViewChild('modalView') modalView!: ElementRef<HTMLDivElement>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // eslint-disable-next-line no-console
    console.log('initiated');
    this.generateForm();
  }

  generateForm() {
    this.calendarForm = this.fb.group({
      name: [null, Validators.required],
      timeZone: [null, Validators.required],
      calendarWorkdays: this.fb.array([
        this.fb.group({
          dayOfWeek: 0,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
        this.fb.group({
          dayOfWeek: 1,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
        this.fb.group({
          dayOfWeek: 2,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
        this.fb.group({
          dayOfWeek: 3,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
        this.fb.group({
          dayOfWeek: 4,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
        this.fb.group({
          dayOfWeek: 5,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
        this.fb.group({
          dayOfWeek: 6,
          calendarWorkingHours: this.fb.array([this.buildWorkingHoursGroup()]),
        }),
      ]),
      calendarHolidays: this.fb.array([this.buildHolidayGroup()]),
    });
  }

  get f() {
    return this.calendarForm.controls;
  }

  get workdaysArray() {
    return this.calendarForm.get('calendarWorkdays') as FormArray;
  }

  calendarWorkingHoursArray(i: number) {
    return this.workdaysArray.controls[i]?.get('calendarWorkingHours') as FormArray;
  }

  onWeekdayToggle(i: number) {
    const disabled = this.workdaysArray.controls[i].get('calendarWorkingHours')?.disabled;

    if (disabled) {
      this.workdaysArray.controls[i].get('calendarWorkingHours')?.enable();
    } else {
      this.workdaysArray.controls[i].get('calendarWorkingHours')?.disable();
    }
  }

  get holidaysArray() {
    return this.calendarForm.get('calendarHolidays') as FormArray;
  }

  buildWorkingHoursGroup() {
    return this.fb.group(
      {
        startTime: null,
        endTime: null,
        // startTime: [{ value: null, disabled: true }],
        // endTime: [{ value: null, disabled: true }],
      }
      // { validators: this.validator } as AbstractControlOptions
    );
  }

  validator(control: AbstractControl) /*: ValidationErrors | null*/ {
    // eslint-disable-next-line no-console
    console.log(control, 'controlll');

    if (control.value.startTime >= control.value.endTime) {
      control.get('startTime')?.setErrors({ equalTime: true });
      control.get('endTime')?.setErrors({ equalTime: true });

      // return { noMatch: true };
    } else {
      control.get('startTime')?.setErrors(null);
      control.get('endTime')?.setErrors(null);

      // return null;
    }
  }

  buildHolidayGroup() {
    return this.fb.group({
      name: [null],
      date: [null],
      frequency: [null],
    });
  }

  addWorkHour(i: number) {
    const group = this.buildWorkingHoursGroup();
    group.enable();
    this.calendarWorkingHoursArray(i).push(group);
  }

  removeWorkHour(i: number, j: number) {
    this.calendarWorkingHoursArray(i).removeAt(j);
  }

  addHoliday() {
    this.holidaysArray.push(this.buildHolidayGroup());
  }

  removeHoliday(index: number) {
    this.holidaysArray.removeAt(index);
  }

  onToggle() {
    const prevState = this.shouldAddHolidayCtrl.value;

    this.shouldAddHolidayCtrl.setValue(!prevState);
  }

  onSubmit() {
    this.calendarForm.reset();
  }

  getErrorMessage(field: string) {
    if (field === 'name' && this.calendarForm.get(field)?.errors) {
      return 'Calendar is required';
    } else if (field === 'timeZone' && this.calendarForm.get(field)?.errors) {
      return 'Timezone is required';
    }

    return null;
  }

  onClose() {
    this.closeEvent.emit();
  }
}
