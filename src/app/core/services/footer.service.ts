import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private footer = new BehaviorSubject<boolean>(false);
  footerState$: Observable<boolean> = this.footer.asObservable();

  constructor() {}

  onLoad() {
    this.footer.next(true);
  }
}
