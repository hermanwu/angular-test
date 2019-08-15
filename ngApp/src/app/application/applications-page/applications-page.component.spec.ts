import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsPageComponent } from './applications-page.component';

describe('ApplicationsPageComponent', () => {
  let component: ApplicationsPageComponent;
  let fixture: ComponentFixture<ApplicationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(!!component).toEqual(true);
  });

  it('should show multiple application items', () => {
    const len = fixture.nativeElement.querySelectorAll('.item').length;
    expect(len).toEqual(2);
  });
});
