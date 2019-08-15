import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';
import { HttpRequestService } from '../http-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StockPropertiesResolverService implements Resolve<any> {
  constructor(private httpRequestService: HttpRequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.httpRequestService.getStock();
  }
}
