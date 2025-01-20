import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickstyleComponent } from './quickstyle.component';

describe('QuickstyleComponent', () => {
  let component: QuickstyleComponent;
  let fixture: ComponentFixture<QuickstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
