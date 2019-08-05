import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPropertiesComponent } from './stock-properties.component';

describe('StockPropertiesComponent', () => {
  let component: StockPropertiesComponent;
  let fixture: ComponentFixture<StockPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
