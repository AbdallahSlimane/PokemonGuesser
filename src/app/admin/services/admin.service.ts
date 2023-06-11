import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Admin} from "../../interfaces";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getCredentials(email: string, password: string) {
    const params = new HttpParams().set('email', email).set('password',password);
    return this.http.get<Admin[]>('http://localhost:3000/admin', { params }).pipe(
      map(response => response.map(admin => ({number: admin.number})))
    );


  }
}
