import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { ActionsService } from 'src/app/core/services/actions.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  todo$!: Observable<Todo>;

  constructor(private actionsService: ActionsService) {}

  ngOnInit(): void {
    this.todo$ = this.actionsService.selectedTodo$;
  }
}
