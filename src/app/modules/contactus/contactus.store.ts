import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap, of, tap } from 'rxjs';

export interface ContactFormInterface {
  isLoading: boolean;
  contacts: any[];
  error: string;
}

@Injectable()
export class ContactUsStore extends ComponentStore<ContactFormInterface> {
  private isLoading$ = this.select((state) => state.isLoading);
  private contacts$ = this.select((state) => state.contacts);
  private error$ = this.select((state) => state.error);

  vm$ = this.select({
    isLoading: this.isLoading$,
    contacts: this.contacts$,
    error: this.error$,
  });

  setIsLoading = this.updater((state) => ({ ...state, isLoading: true }));

  setContacts = this.updater((state, contacts: any[]) => ({
    ...state,
    isLoading: false,
    contacts: contacts,
  }));

  addContact = this.updater((state, contact: any) => ({
    ...state,
    isLoading: false,
    contacts: [...state.contacts, contact],
  }));

  setError = this.updater((state, err: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    error: err.message,
  }));

  getContacts = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap(() => {
        return of([]).pipe(
          tapResponse(
            (contacts) => this.setContacts(contacts),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  createContact = this.effect((contact$: Observable<ContactFormInterface>) => {
    return contact$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap((contact) => {
        return of([]).pipe(
          tapResponse(
            (contact) => this.addContact(contact),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  constructor() {
    super({
      isLoading: false,
      contacts: [],
      error: '',
    });
  }
}
