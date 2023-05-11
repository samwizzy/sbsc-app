import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongformComponent } from './longform.component';

describe('LongformComponent', () => {
  let component: LongformComponent;
  let fixture: ComponentFixture<LongformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
