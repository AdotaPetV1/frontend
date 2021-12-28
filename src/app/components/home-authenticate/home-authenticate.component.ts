import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalModel } from 'src/app/model/AnimalResponseModel';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-home-authenticate',
  templateUrl: './home-authenticate.component.html',
  styleUrls: ['./home-authenticate.component.css']
})
export class HomeAuthenticateComponent implements OnInit {
  public listAnimal!: AnimalModel[];

  constructor(private router : Router,
    public AnimalService: AnimalService,) { }

  ngOnInit(): void {
    this.getAllAnimal();
  }
  goToLogin(){
    this.router.navigate(['./login']);
  }
  goToRegistertSelect(){
    this.router.navigate(['./cadastro']);
  }
  goToHomeVisitante(){
    this.router.navigate(['./home']);
  }
  goToPerfilCat(){
    this.router.navigate(['./galeria-de-fotos-cats']);
  }
  goToPerfilDog(){
    this.router.navigate(['./galeria-de-fotos-dogs']);
  }
  goToContribuicao(){
    this.router.navigate(['./contribuicoes']);
  }
  getAllAnimal(){
    let uf = { UF : 'MG' }

    this.AnimalService.GetAllAnimal(uf).subscribe(response =>{
      this.listAnimal = response.data;
      console.log(this.listAnimal, );
    });
  }
}
