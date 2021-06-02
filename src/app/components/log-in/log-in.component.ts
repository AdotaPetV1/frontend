import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public loginForm! : FormGroup;


  constructor(
    public loginService:LoginServiceService,
     private router: Router,
     private fb: FormBuilder,
     private rest: LoginServiceService
     ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: [ '', [Validators.required]],
      Senha: [ '', [Validators.required]]
    })
    this.doLogin()
  }

  doLogin(){
    console.log("deu certo")
    let user={
      Email:"email",
      Senha:"senha"
    }
    console.log(user)
    this.loginService.loginUser(user).subscribe(response =>{
      console.log(response)
      this.loginForm.reset();
      this.router.navigate(['home-principal']);
    });
    
  }

}
