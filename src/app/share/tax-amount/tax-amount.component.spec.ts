import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAmountComponent } from './tax-amount.component';

describe('TaxAmountComponent', () => {
  let component: TaxAmountComponent;
  let fixture: ComponentFixture<TaxAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxAmountComponent]
    });
    fixture = TestBed.createComponent(TaxAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
