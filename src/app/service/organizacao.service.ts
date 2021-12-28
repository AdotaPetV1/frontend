import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseListOng } from '../model/OngResponseModel';
import ResponseModel from '../model/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "http://localhost:8080/api/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  public GetAllOngs(): Observable<ResponseListOng>{
    return this.httpClient.get<ResponseListOng>(this.apiUrl + '/ong', this.httpOptions);
  }

}
