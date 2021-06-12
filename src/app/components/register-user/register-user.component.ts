import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public userRegisterForm! : FormGroup;


  constructor(
    public loginService:LoginServiceService,
     private router: Router,
     private fb: FormBuilder,
     private rest: LoginServiceService
     ) {}

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({
      Nome: [ '', [Validators.required]],
      CPF: [ '', [Validators.required]],
      Email: [ '', [Validators.required]],
      Senha: [ '', [Validators.required]],
      Numero: [ '', [Validators.required]],
      Endereco: [ '', [Validators.required]],
      Municipio: [ '', [Validators.required]],
      CEP: [ '', [Validators.required]],
      UF: [ '', [Validators.required]],
    })
  }

  doUserRegister(){

    let user = {
      Nome : this.userRegisterForm.value.Nome,
      CPF: this.userRegisterForm.value.CPF,
      Email : this.userRegisterForm.value.Email,
      Senha: this.userRegisterForm.value.Senha,
      Numero : this.userRegisterForm.value.Numero,
      Endereco: this.userRegisterForm.value.Endereco,
      Municipio : this.userRegisterForm.value.Municipio,
      CEP: this.userRegisterForm.value.CEP,
      UF: this.userRegisterForm.value.UF,

    }

    this.loginService.DoUserRegister(user).subscribe(response =>{
      //Valida se ele trouxe um usuário com as informações passada
      if(response.data){
        //redireciona para a home completa
        this.router.navigate(['home-principal'])
        //Exemplo de utilização do Alert, mas aqui deve vir a lógica para trocar de página
        return Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: "Usuário Criado com sucesso!",
          
        
        } );
          
      }
      else{
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Ocorreu um erro ao tentar criar usuário !"
        });
        
      }
    },ex =>{ //Para validar outros status HTTP, por exemplo : 404, aonde o usuário não foi encontrado, ou 500 erro interno

      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Error: ' + ex.error.data.message
      });
      //redireciona para a tela de login 
      this.router.navigate(['cadastro-user'])
    });
    
  }

}
