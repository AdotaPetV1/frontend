import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseListAnimal } from '../model/AnimalResponseModel';
import ResponseModel from '../model/ResponseModel';
import { StorageService } from './utils/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient : HttpClient,
    private StorageService: StorageService) { }

  //apiUrl = "https://adota-pet-backend.herokuapp.com/api/animal";
  apiUrl = "http://localhost:8080/api/";
  token =  this.StorageService.get("token");
  
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": this.token
    }),
  };

    //service de registro de animal
   public DoAnimalRegister(animal: any): Observable<ResponseListAnimal> {
      return  this.httpClient.post<ResponseListAnimal>(
         this.apiUrl + '/animal',
         animal,
         this.httpOptions,
       );
     }

  
     public DoAnimalEdit(animal: any): Observable<ResponseModel> {
      return  this.httpClient.put<ResponseModel>(
         this.apiUrl + '/animal',
         animal,
         this.httpOptions,
       );
     }
     public DoAnimalDelete(id: any): Observable<ResponseListAnimal> {
      return  this.httpClient.delete<ResponseListAnimal>(
         this.apiUrl + '/animal/' + id,
         this.httpOptions,
         
       );
     }
     public DoAnimalUpdate(animal: any): Observable<ResponseListAnimal> {
      return  this.httpClient.put<ResponseListAnimal>(
         this.apiUrl + '/animal',
         animal,
         this.httpOptions,
         
       );
     }

    

    public GetAllAnimal(uf: any ): Observable<ResponseListAnimal>{
      return this.httpClient.get<ResponseListAnimal>(
       this.apiUrl + '/animal' ,
        this.httpOptions,
      );
    }
   /*  public GetAllAnimal(uf: any ): Observable<ResponseListAnimal>{
      return this.httpClient.get<ResponseListAnimal>(
       this.apiUrl + '/animal' ,
        this.httpOptions,
      );
    }*/

    
    
}
