import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})
export class RegisterDogComponent implements OnInit {
  public animalRegisterForm! : FormGroup;
  
  constructor(
    public loginService:LoginServiceService,
     private router: Router,
     private fb: FormBuilder,
     private rest: LoginServiceService
     ) {}

  ngOnInit(): void {
    this.animalRegisterForm = this.fb.group({
      TipoAnimal: [ '', [Validators.required]],
      Nome: [ '', [Validators.required]],
      Raca: [ '', [Validators.required]],
      Porte: [ '', [Validators.required]],
      Idade: [ '', [Validators.required]],
      Sexo: [ '', [Validators.required]],
      OrganizacaoNome: [ '', [Validators.required]],
      Email: [ '', [Validators.required]],
      Descricao: [ '', [Validators.required]],
    })
  }

 doAnimalRegister(){

    let animal = {
      TipoAnimal : this.animalRegisterForm.value.TipoAnimal,
      Nome: this.animalRegisterForm.value.Nome,
      Raca : this.animalRegisterForm.value.Raca,
      Porte: this.animalRegisterForm.value.Porte,
      Idade : this.animalRegisterForm.value.Idade,
      Sexo: this.animalRegisterForm.value.Sexo,
      OrganizacaoNome : this.animalRegisterForm.value.OrganizacaoNome,
      Email: this.animalRegisterForm.value.Email,
      Descricao: this.animalRegisterForm.value.Descricao,

    }
    
    this.loginService.DoAnimalRegister(animal).subscribe(response =>{
      //Valida se ele trouxe um usuário com as informações passada
      if(response.data){
        //redireciona para a home completa
       // this.router.navigate(['cadastro-dog'])
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
      //redireciona para a tela de login 
      //this.router.navigate(['cadastro-dog'])
    });
    
  }

}

