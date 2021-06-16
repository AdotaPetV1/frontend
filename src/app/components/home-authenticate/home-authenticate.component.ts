import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-authenticate',
  templateUrl: './home-authenticate.component.html',
  styleUrls: ['./home-authenticate.component.css']
})
export class HomeAuthenticateComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['./perfil-cat']);
  }
  goToPerfilDog(){
    this.router.navigate(['./perfil-dog']);
  }
}
