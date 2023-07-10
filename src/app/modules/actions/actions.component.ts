import { Component, OnInit } from '@angular/core';
import { Observable, from, merge, of, reduce, scan } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { ActionsService } from 'src/app/core/services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  list: Observable<number[]> = of([1, 2, 3, 4, 5]);

  constructor(private actionsService: ActionsService) {}

  ngOnInit(): void {
    this.todos$ = this.actionsService.todos;

    merge(of([1, 2, 3]), of([4, 5, 6]))
      .pipe(reduce((acc: any[], curr: any) => [...acc, ...curr], []))
      // .pipe(scan((acc: any[], curr: any) => [...acc, ...curr], []))
      .subscribe((data) => console.log(data));
  }

  handleTodoId(id: number) {
    this.actionsService.onTodoSubjectChanged(id);
  }
}
