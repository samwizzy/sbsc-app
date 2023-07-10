import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  private TodoSubject = new Subject<number>();
  TodoSubjectAction: Observable<number> = this.TodoSubject.asObservable();
  todos: Observable<Todo[]> = this.http.get<Todo[]>(
    `${environment.APIURL}/todos`
  );

  selectedTodo$: Observable<Todo> = this.TodoSubjectAction.pipe(
    switchMap((todoId) => {
      return this.http.get<Todo>(`${environment.APIURL}/todos/${todoId}`);
    })
  );

  constructor(private http: HttpClient) {}

  onTodoSubjectChanged(id: number): void {
    this.TodoSubject.next(id);
  }
}
