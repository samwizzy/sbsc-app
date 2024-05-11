import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of, switchMap, tap } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  private TodoSubject = new Subject<number>();
  TodoSubjectAction: Observable<number> = this.TodoSubject.asObservable();
  todos: Observable<Todo[]> = this.getAllTodos();

  constructor(private http: HttpClient, private transferState: TransferState) {}

  getAllTodos(): Observable<Todo[]> {
    const transferKey = makeStateKey<any>('myTodos');

    if (this.transferState.hasKey(transferKey)) {
      const todos = of(this.transferState.get(transferKey, []));
      this.transferState.remove(transferKey);

      return todos;
    } else {
      const todos = this.http.get<Todo[]>(`${environment.APIURL}/todos`);
      todos.subscribe((todos) => this.transferState.set(transferKey, todos));

      return todos;
    }
  }

  selectedTodo$: Observable<Todo> = this.TodoSubjectAction.pipe(
    switchMap((todoId) => {
      return this.http.get<Todo>(`${environment.APIURL}/todos/${todoId}`);
    })
  );

  onTodoSubjectChanged(id: number): void {
    this.TodoSubject.next(id);
  }
}
