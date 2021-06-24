import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { StorageService } from 'src/app/service/utils/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public loginForm! : FormGroup;


  constructor(
      public loginService:LoginServiceService,
      private StorageService : StorageService,
      private router: Router,
      private fb: FormBuilder,
     ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: [ '', [Validators.required]],
      Senha: [ '', [Validators.required]]
    })
  }

  doLogin(){

    let user = {
      Email : this.loginForm.value.Email,
      Senha: this.loginForm.value.Senha
    }

    this.loginService.DoLogin(user).subscribe(response =>{
      //Valida se ele trouxe um usuário com as informações passada
      if(response.data.user){

        //Armazena o token no local storage
        this.StorageService.set("token",response.data.token.toString());
        
        //redireciona para a home completa
        this.router.navigate(['home-principal'])
        //Exemplo de utilização do Alert, mas aqui deve vir a lógica para trocar de página
        return Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: "Usuário logado com sucesso!",
          
        
        } );
          
      }
      else{
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Ocorreu um erro ao tentar realizar o login!"
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


}
