import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataaccessService } from './dataaccess.service';
import { loginRequest, tokenResponse } from './interface/items';

@Injectable()
export class AuthService {
  constructor(private dataAccess: DataaccessService) {}

  login(request: loginRequest): Observable<tokenResponse> {
    return this.dataAccess.logIn(request);
  }
}