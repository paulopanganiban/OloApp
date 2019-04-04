import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private httpClient: HttpClient) { }
/// 17.4
  login(model: any) {
    return this.httpClient.post(
      this.baseUrl + 'login', // url (1st)
      model, // parameter to pass (2)
      ).pipe(
        map((lagaymoDitoResponse: any) => {
          const user = lagaymoDitoResponse;
          // check if merong user
          if (user) {
            localStorage.setItem('token', user.token)
          }
        })
      );
  }
  register(model: any) {
    return this.httpClient.post(`${this.baseUrl}register`, model);
  }
}
