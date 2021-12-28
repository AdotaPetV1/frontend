import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgot-senha-email',
  templateUrl: './forgot-senha-email.component.html',
  styleUrls: ['./forgot-senha-email.component.css']
})
export class ForgotSenhaEmailComponent implements OnInit {
  public forgoutForm! : FormGroup;


  constructor(
    public loginService:LoginServiceService,
     private router: Router,
     private fb: FormBuilder,
     private rest: LoginServiceService
     ) {}

  ngOnInit(): void {
    this.forgoutForm = this.fb.group({
      Email: [ '', [Validators.required]],
      
    })
  }

  doForgoutPass(){
    let user = {
      Email : this.forgoutForm.value.Email,
     
    }

    this.loginService.DoForgotPassword(user).subscribe(response =>{
      //Valida se ele trouxe um usuário com as informações passada
      console.log(response)
      if(response.data){
        //redireciona para a home completa
        this.router.navigate(['esqueceu-senha-codigo'])
        //Exemplo de utilização do Alert, mas aqui deve vir a lógica para trocar de página
        return Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: "Email enviado sucesso!",
          
        
        } );
          
      }
      else{
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Ocorreu um erro ao tentar enviar o email!"
        });
        
      }
    },ex =>{ //Para validar outros status HTTP, por exemplo : 404, aonde o usuário não foi encontrado, ou 500 erro interno

      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Error: ' + ex.error.data.message
      });
      //redireciona para a tela de login 
      /*this.router.navigate(['login'])*/
    });
    
  }
 
}
