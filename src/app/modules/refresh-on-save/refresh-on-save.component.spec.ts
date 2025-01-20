import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshOnSaveComponent } from './refresh-on-save.component';

describe('RefreshOnSaveComponent', () => {
  let component: RefreshOnSaveComponent;
  let fixture: ComponentFixture<RefreshOnSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshOnSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshOnSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
