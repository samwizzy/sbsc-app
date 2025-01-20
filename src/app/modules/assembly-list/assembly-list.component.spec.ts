import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AssemblyListComponent } from './assembly-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingHarness } from '@angular/router/testing';

describe('AssemblyListComponent', () => {
  let component: AssemblyListComponent;
  let fixture: ComponentFixture<AssemblyListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssemblyListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssemblyListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty input', () => {
    const inputEl = de.query(By.css('[data-testid="assembly-input"]'));

    expect(inputEl.nativeElement.value).toEqual('');
  });

  it('should add an item to the first stage', () => {
    const inputEl = de.query(By.css('[data-testid="assembly-input"]'));

    inputEl.nativeElement.value = 'Task 1';

    /** Tell angular that an input change just occurred **/
    inputEl.nativeElement.dispatchEvent(new Event('input'));

    /** Trigger native event associated to DOM element **/
    inputEl.triggerEventHandler('keydown.enter', {});
    fixture.detectChanges();

    expect(component.items[0].length).toBe(1);
    expect(inputEl.nativeElement.value).toEqual('');
  });

  it('should validate input data', () => {
    let stageElems = de.queryAll(By.css('[data-testid="assembly-stage"]'));

    expect(stageElems.length).toBe(4);
  });

  it('should have all stages', () => {
    let stagesEl = de.query(By.css('[data-testid="assembly-stages"]')).nativeElement;

    let children = stagesEl.children;

    expect(children.length).toBe(4);
  });

  describe('stage items checks', async () => {
    let inputEl: DebugElement;
    let harness: RouterTestingHarness;

    const addItems = (items: string[]) => {
      items.forEach((item) => {
        inputEl.nativeElement.value = item;
        inputEl.nativeElement.dispatchEvent(new Event('input'));
        inputEl.triggerEventHandler('keydown.enter', {});
      });
    };

    beforeEach(async () => {
      inputEl = de.query(By.css('[data-testid="assembly-input"]'));
      harness = await RouterTestingHarness.create();
    });

    it('first stage should have stage items', () => {
      const tasks = ['Auth', 'Login', 'Setup', 'Deploy'];

      addItems(tasks);

      fixture.detectChanges();

      const stageEl = de.query(By.css('[data-testid="assembly-stage"]')).nativeElement;
      const stageItems = de.queryAll(By.css('[data-testid="assembly-item"]'));

      const children = stageEl.children;

      /** this only returns the asssembly items & h2 */
      expect(children.length).toBe(5);

      /** this only returns the asssembly items */
      expect(stageItems.length).toBe(4);
    });

    it('first stage should move to second stage', () => {
      const spy = spyOn(component, 'moveToNext').and.callThrough();
      const tasks = ['Auth', 'Login', 'Setup', 'Deploy'];
      const stagesEl = de.queryAll(By.css('[data-testid="assembly-stage"]'));
      const stage1 = stagesEl[0];

      /** add a list of task to stage 1 */
      addItems(tasks);

      /** call change detection to update the template */
      fixture.detectChanges();

      /** retrieve the first task:button from stage 1 and click it */
      const item1 = stage1.nativeElement.querySelector('[data-testid="assembly-item"]');
      item1.click();

      expect(component.items[1].length).toEqual(1);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('testing with spy', () => {
    const getUsers = jasmine.createSpy('getUsers').and.callFake(() => ['James', 'Paul']);

    getUsers();

    it('should return users', () => {
      expect(getUsers).toHaveBeenCalled();
    });
  });
});
