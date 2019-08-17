import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsPageComponent } from './applications-page.component';
import { ApplicationHttpService } from '../services/application-http.service';
import { of } from 'rxjs';
import { ApplicationInstance } from '../models/application-instance.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApplicationsPageComponent', () => {
  let component: ApplicationsPageComponent;
  let fixture: ComponentFixture<ApplicationsPageComponent>;
  let applicationHttpService: ApplicationHttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsPageComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsPageComponent);

    // setup backend mock;
    applicationHttpService = TestBed.get(ApplicationHttpService);
    spyOn(applicationHttpService, 'getApplications').and.returnValue(
      of([{ id: 1 }, { id: 2 }])
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(!!component).toEqual(true);
  });

  it('should show multiple application items', () => {
    const applicationList = fixture.nativeElement.querySelectorAll('.item');
    expect(applicationList.length).toEqual(2);
  });

  it('should have access button for each list item', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.innerHTML).toEqual('Access');
  });
});
