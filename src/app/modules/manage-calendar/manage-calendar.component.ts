import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manage-calendar',
  templateUrl: './manage-calendar.component.html',
  styleUrls: ['./manage-calendar.component.scss'],
})
export class ManageCalendarComponent {
  @Input() data!: any;
}
