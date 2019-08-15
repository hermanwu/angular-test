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

//
