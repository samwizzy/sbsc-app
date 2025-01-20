import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayComponent } from './two-way.component';
import { Router } from '@angular/router';

describe('TwoWayComponent', () => {
  let component: TwoWayComponent;
  let fixture: ComponentFixture<TwoWayComponent>;
  let router = jasmine.createSpyObj<Router>('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
