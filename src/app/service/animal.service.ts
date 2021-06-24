import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ResponseModel from '../model/ResponseModel';
import { StorageService } from './utils/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient : HttpClient,
    private StorageService: StorageService) { }

  apiUrl = "http://localhost:8080/api/";
  token =  this.StorageService.get("token");
  
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": this.token
    }),
  };

    //service de registro de animal
    public DoAnimalRegister(animal: any): Observable<ResponseModel> {
      return  this.httpClient.post<ResponseModel>(
         this.apiUrl + '/animal',
         animal,
         this.httpOptions,
       );
     }
}
