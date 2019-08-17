import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpRequestService } from './http-request.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// describe('HttpRequestService (with spies)', () => {
//   let httpClientSpy: { get: jasmine.Spy };
//   let httpRequestService: HttpRequestService;

//   beforeEach(() => {
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     httpRequestService = new HttpRequestService(<any>httpClientSpy);
//   });

//   it('should return expected application', () => {
//     const expectedApplications = [
//       { _id: '1', name: 'Linux App', description: 'des', date: '2019-7-24' },
//       { _id: '2', name: 'Centos App', description: 'des', date: '2019-7-24' },
//     ];

//     httpClientSpy.get.and.returnValue(of(expectedApplications));

//     httpRequestService.getEvents();

//     expect(httpClientSpy.get.calls.count()).toEqual(1, 'one call');
//   });
// });

// describe('HttpRequestService (with mock)', () => {
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let httpRequestService: HttpRequestService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       // Import the HttpClient mocking services.
//       imports: [HttpClientTestingModule],
//       // Provide the service to test
//       providers: [HttpRequestService],
//     });

//     // inject everything.
//     httpRequestService = TestBed.get(HttpRequestService);
//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//   });

//   afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });

//   describe('#get', () => {
//     let expectedApplications;

//     beforeEach(() => {
//       expectedApplications = [
//         { _id: '1', name: 'Linux App', description: 'des', date: '2019-7-24' },
//         { _id: '2', name: 'Centos App', description: 'des', date: '2019-7-24' },
//       ];
//     });

//     it('should return expected application', () => {
//       httpRequestService.getEvents().subscribe(applications => {
//         console.log(applications);
//         expect(applications).toEqual(
//           expectedApplications,
//           'should have a list of application'
//         );
//       }, fail);

//       const req = httpTestingController.expectOne(
//         httpRequestService.applicationsUrl
//       );

//       expect(req.request.method).toEqual('GET');

//       req.flush(expectedApplications);
//     });
//   });
// });
