import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoEditorCdnComponent } from './monaco-editor-cdn.component';

describe('MonacoEditorCdnComponent', () => {
  let component: MonacoEditorCdnComponent;
  let fixture: ComponentFixture<MonacoEditorCdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoEditorCdnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonacoEditorCdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
