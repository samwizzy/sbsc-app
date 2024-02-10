import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMenusComponent } from './slide-menus.component';

describe('SlideMenusComponent', () => {
  let component: SlideMenusComponent;
  let fixture: ComponentFixture<SlideMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideMenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
