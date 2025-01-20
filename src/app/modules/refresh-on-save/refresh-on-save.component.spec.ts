import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshOnSaveComponent } from './refresh-on-save.component';
import { ProductService } from 'src/app/core/services/product.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Prod } from 'src/app/core/models/product';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

const product: Prod = { id: 1, title: '', category: '', price: 20000, description: '', image: '' };

describe('RefreshOnSaveComponent', () => {
  let component: RefreshOnSaveComponent;
  let fixture: ComponentFixture<RefreshOnSaveComponent>;
  let de: DebugElement;
  let productService = jasmine.createSpyObj<ProductService>('productService', ['getAllProduct']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefreshOnSaveComponent],
      imports: [BrowserAnimationsModule, MaterialModule, ReactiveFormsModule],
      providers: [
        { provide: ProductService, useValue: productService },
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RefreshOnSaveComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item to products', () => {
    const createSpy = spyOn(component, 'createProduct');

    component.form.patchValue({
      title: 'Sneaker',
      description: 'Sneaks',
      image: 'Sneak image',
      category: 'Shoes',
      price: '500000',
    });

    fixture.detectChanges();

    const submitBtn = de.query(By.css('[data-testid="submit-btn"]'));

    submitBtn.triggerEventHandler('click', null);

    expect(createSpy).withContext('Create product function was clicked').toHaveBeenCalled();
  });

  it('should return list', () => {
    const spy = productService.getAllProduct.and.callFake(() => of([product]));

    component.products$.subscribe((data) => {
      expect(data?.length).withContext('Product returned an item').toEqual(1);
    });

    expect(true).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
});
