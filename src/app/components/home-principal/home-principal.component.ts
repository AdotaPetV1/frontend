import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnimalModel } from 'src/app/model/AnimalResponseModel';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.css']
})
export class HomePrincipalComponent implements OnInit {

  public listAnimal!: AnimalModel[];

  constructor(private router : Router,
    public AnimalService: AnimalService,) {}

  ngOnInit(): void {
    this.getAllAnimal();
  }
  goToLogin(){
    this.router.navigate(['./login']);
  }
  goToRegistertSelect(){
    this.router.navigate(['./cadastro']);
  }
  goToEditSelect(){
    this.router.navigate(['./editar']);
  }
  goToRegisterPet(){
    this.router.navigate(['./cadastro-dog']);
  }
  goToEdit(){
    this.router.navigate(['./detalhe']);
  }
  getAllAnimal(){
    let uf = { UF : 'MG' }

    this.AnimalService.GetAllAnimal(uf).subscribe(response =>{
      this.listAnimal = response.data;
      console.log(this.listAnimal, );
    });
  }
  

  
}
