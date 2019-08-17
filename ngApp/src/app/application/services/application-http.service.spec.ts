import { TestBed } from '@angular/core/testing';

import { ApplicationHttpService } from './application-http.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('ApplicationHttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let applicationHttpService: ApplicationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services.
      imports: [HttpClientTestingModule],
      // Provide the service to test
      providers: [ApplicationHttpService],
    });

    // inject everything.
    applicationHttpService = TestBed.get(ApplicationHttpService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: ApplicationHttpService = TestBed.get(ApplicationHttpService);
    expect(!!service).toEqual(true);
  });

  describe('test getApplications call', () => {
    let expectedApplications;

    beforeEach(() => {
      expectedApplications = [{ id: 1 }, { id: 2 }];
    });

    it('should return expected application', () => {
      applicationHttpService.getApplications().subscribe(applications => {
        expect(applications).toEqual(
          expectedApplications,
          ' should have a list of application'
        );
      }, fail);

      // test request url.
      const req = httpTestingController.expectOne(
        applicationHttpService.applicationsUrl
      );

      // test request method.
      expect(req.request.method).toEqual('GET');

      req.flush(expectedApplications);
    });
  });
});
