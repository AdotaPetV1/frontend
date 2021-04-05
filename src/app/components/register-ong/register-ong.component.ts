import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-ong',
  templateUrl: './register-ong.component.html',
  styleUrls: ['./register-ong.component.css']
})

export class RegisterOngComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor() { }

  ngOnInit() {
  }

}