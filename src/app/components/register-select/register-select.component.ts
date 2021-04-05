import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-select',
  templateUrl: './register-select.component.html',
  styleUrls: ['./register-select.component.css']
})
export class RegisterSelectComponent implements OnInit {

  constructor(private router : Router) { }

  goToOng(){
    this.router.navigate(['./cadastro-ong']);
  }
  goToUser(){
    this.router.navigate(['./cadastro-user']);
  }

  ngOnInit(): void {
  }

  

}
