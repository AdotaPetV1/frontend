import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalModel } from 'src/app/model/AnimalResponseModel';
import { AnimalService } from 'src/app/service/animal.service';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public listAnimal!: AnimalModel[];
  
  

  constructor(public AnimalService: AnimalService,
    public loginService:LoginServiceService,
    private router: Router,
    private fb: FormBuilder,
    ) {

    
   }

  ngOnInit(): void {
    this.getAllAnimal();
  }

  getAllAnimal(){
    let uf = { UF : 'MG' }

    this.AnimalService.GetAllAnimal(uf).subscribe(response =>{
      this.listAnimal = response.data;
      console.log(this.listAnimal, );
    });
  }
  onDelete(){
    
    this.AnimalService.DoAnimalDelete(37).subscribe(response =>{
      this.listAnimal = response.data;
      console.log(this.listAnimal, );
      this.ngOnInit();
      
    });
  }
  goToEditPet(){
    this.router.navigate(['./editar-dog']);
  }

 
  }
  

