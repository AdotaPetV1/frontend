import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OngModel, ResponseListOng } from 'src/app/model/OngResponseModel';
import { AnimalService } from 'src/app/service/animal.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { OrganizacaoService  } from 'src/app/service/organizacao.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})
export class RegisterDogComponent implements OnInit {
  
  public animalRegisterForm! : FormGroup;
  public listOng !: OngModel[];

  constructor(
    public loginService:LoginServiceService,
    private router: Router,
    private fb: FormBuilder,
    private OrganizacaoService : OrganizacaoService,
    private AnimalService : AnimalService
  ) {}

  ngOnInit(): void {

    this.getAllOng();

    this.animalRegisterForm = this.fb.group({
      TipoAnimal: [ '', [Validators.required]],
      Nome: [ '', [Validators.required]],
      Raca: [ '', [Validators.required]],
      Porte: [ '', [Validators.required]],
      Idade: [ '', [Validators.required]],
      Sexo: [ '', [Validators.required]],
      IdOrgResponsavel: [ '', [Validators.required]],
      Descricao: [ '', [Validators.required]],
    });


  }

 doAnimalRegister(){

    let animal = {
      TipoAnimal : this.animalRegisterForm.value.TipoAnimal,
      Nome: this.animalRegisterForm.value.Nome,
      Raca : this.animalRegisterForm.value.Raca,
      Porte: this.animalRegisterForm.value.Porte,
      Idade : this.animalRegisterForm.value.Idade,
      Sexo: this.animalRegisterForm.value.Sexo,
      IdOrgResponsavel : this.animalRegisterForm.value.IdOrgResponsavel,
      Descricao: this.animalRegisterForm.value.Descricao,

    }

    this.AnimalService.DoAnimalRegister(animal).subscribe(response =>{
      
      //Valida se ele trouxe um usuário com as informações passada
      if(response){
        //redireciona para a home completa
       this.router.navigate(['cadastro-dog'])
        //Exemplo de utilização do Alert, mas aqui deve vir a lógica para trocar de página
        return Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: "Animal Criado com sucesso!",
          
        
        } );
          
      }
      else{
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Ocorreu um erro ao tentar criar Animal !"
        });
        
      }
    },ex =>{ //Para validar outros status HTTP, por exemplo : 404, aonde o usuário não foi encontrado, ou 500 erro interno

      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Error: ' + ex.error.data.message
      });

    });
    
  }

  getAllOng(){
    this.OrganizacaoService.GetAllOngs().subscribe(response =>{
      this.listOng = response.data;
      console.log(this.listOng);
    });
  }
}

