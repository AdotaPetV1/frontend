import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient : HttpClient) {}

  apiUrl="http://localhost:8080/api/"
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  public loginUser (user:any):Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+"auth/login", user,)
  }

  
}
