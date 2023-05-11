import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { ActionsService } from 'src/app/core/services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private actionsService: ActionsService) {}

  ngOnInit(): void {
    this.todos$ = this.actionsService.todos;
  }

  handleTodoId(id: number) {
    console.log(id, 'id');
    this.actionsService.onTodoSubjectChanged(id);
  }
}
