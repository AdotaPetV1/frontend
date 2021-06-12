import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-ong',
  templateUrl: './register-ong.component.html',
  styleUrls: ['./register-ong.component.css']
})

export class RegisterOngComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  public ongRegisterForm! : FormGroup;


  constructor(
    public loginService:LoginServiceService,
     private router: Router,
     private fb: FormBuilder,
    // private rest: LoginServiceService
     ) {}

  ngOnInit(): void {
    this.ongRegisterForm = this.fb.group({
      Nome: [ '', [Validators.required]],
      CNPJ: [ '', [Validators.required]],
      Email: [ '', [Validators.required]],
      Senha: [ '', [Validators.required]],
      Numero: [ '', [Validators.required]],
      Site: [ '', [Validators.required]],
      Instagram: [ '', [Validators.required]],
      Facebook: [ '', [Validators.required]],
      Vakaquinha: [ '', [Validators.required]],
      Endereco: [ '', [Validators.required]],
    })
  }

  doOngRegister(){

    let ong = {
      Nome : this.ongRegisterForm.value.Nome,
      CPF: this.ongRegisterForm.value.CPF,
      Email : this.ongRegisterForm.value.Email,
      Senha: this.ongRegisterForm.value.Senha,
      Numero : this.ongRegisterForm.value.Numero,
      Site: this.ongRegisterForm.value.Site,
      Instagram : this.ongRegisterForm.value.Instagram,
      Facebook: this.ongRegisterForm.value.Facebook,
      Vakaquinha: this.ongRegisterForm.value.Vakaquinha,
      Endereco: this.ongRegisterForm.value.Endereco,

    }

    this.loginService.DoOngRegister(ong).subscribe(response =>{
      //Valida se ele trouxe um usuário com as informações passada
      if(response.data){
        //redireciona para a home completa
        this.router.navigate(['home-principal'])
        //Exemplo de utilização do Alert, mas aqui deve vir a lógica para trocar de página
        return Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: "Ong Criada com sucesso!",
          
        
        } );
          
      }
      else{
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Ocorreu um erro ao tentar criar Ong !"
        });
        
      }
    },ex =>{ //Para validar outros status HTTP, por exemplo : 404, aonde o usuário não foi encontrado, ou 500 erro interno

      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Error: ' + ex.error.data.message
      });
      //redireciona para a tela de login 
      this.router.navigate(['cadastro-ong'])
    });
    
  }

}