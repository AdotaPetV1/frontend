import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import ResponseModel from '../model/UserResponseModel';
@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {

  constructor(private httpClient : HttpClient) {}

  apiUrl = "http://localhost:8080/api/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };


  //Por ser TypeScript é necessário criar um modelo contendo as coisas que irão retornar do backend
  // e sempre que for usar uma informação você deve colocar o atributo lá.
  //Então se você tiver um outro response com outras informações é necessário criar um novo modelo.      
  public DoLogin(user: any): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'auth/login',
      user,
      this.httpOptions,
    );
  }

}
