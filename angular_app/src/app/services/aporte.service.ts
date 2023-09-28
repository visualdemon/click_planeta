import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class AporteService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/';
  }

  // Toogle Loggedin
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  // Status
  status() {
    const localData: any = localStorage.getItem('user');
    if (!localData) {
      this.isLoggedIn.next(false);
      console.log('User not lgged in !!');
    } else {
      const userObj = JSON.parse(localData);
      const token_expires_at = new Date(userObj.token_expires_at);
      const current_date = new Date();
      if (token_expires_at > current_date) {
        this.isLoggedIn.next(true);
      } else {
        this.isLoggedIn.next(false);
        console.log('Token Expires!!');
      }
    }
    return this.isLoggedIn.asObservable();
  }

  getClick01(user: any) {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8000/api/getClick01', params, { headers: headers });
  }

  getClick02(user: any) {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8000/api/getClick02', params, { headers: headers });
  }

  register(user: any) {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8000/api/registercl3', params, { headers: headers });
  }

  getClick03(user: any) {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8000/api/getClick03', params, { headers: headers });
  }

  updateClick03(user: any) {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8000/api/updateClick03', params, { headers: headers });
  }


  deleteClick03(user: any) {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8000/api/deleteClick03', params, { headers: headers });
  }



}
