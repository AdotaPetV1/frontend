import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserResponseModel from '../model/UserResponseModel';
import ResponseModel from '../model/ResponseModel';

@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {

  constructor(private httpClient : HttpClient) {
    
  }

  apiUrl = "http://localhost:8080/api/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };


  //Por ser TypeScript é necessário criar um modelo contendo as coisas que irão retornar do backend
  // e sempre que for usar uma informação você deve colocar o atributo lá.
  //Então se você tiver um outro response com outras informações é necessário criar um novo modelo.      
  public DoLogin(user: any): Observable<UserResponseModel>{
    return this.httpClient.post<UserResponseModel>(
      this.apiUrl + '/auth/login',
      user,
      this.httpOptions,
    );
  }
//service de recuperar senha

  public DoForgotPassword(user: any): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'auth/forgotPassword',
      user,
      this.httpOptions,
    );
  }
//service de registro de usuario
  public DoUserRegister(user: any): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + '/user/register',
      user,
      this.httpOptions,
    );
  }

  //service de registro de ongs
  public DoOngRegister(ong: any): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + '/ong',
      ong,
      this.httpOptions,
    );
  }

  /*public DoUpdateDog(id:any ): Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(
      this.apiUrl + '/animal',
      id,
      this.httpOptions,
    );
  }

  public DoDeleteDog(id:any ): Observable<ResponseModel>{
    return this.httpClient.delete<ResponseModel>(
      this.apiUrl + '/animal/:ID',
      id,
      this.httpOptions,
    );
  }

  public DoGetAllDog(dog: any, key: string){

  }*/

  


}
