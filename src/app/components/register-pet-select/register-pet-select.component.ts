import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pet-select',
  templateUrl: './register-pet-select.component.html',
  styleUrls: ['./register-pet-select.component.css']
})
export class RegisterPetSelectComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToRegisterCat(){
    this.router.navigate(['./cadastro-cat']);
  }
  goToRegisterDog(){
    this.router.navigate(['./cadastro-dog']);
  }

}
