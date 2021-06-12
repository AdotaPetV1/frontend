import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.css']
})
export class EditSelectComponent implements OnInit {

  constructor(private router : Router) { }

  goToEditOng(){
    this.router.navigate(['./editar-ong']);
  }
  goToEditUser(){
    this.router.navigate(['./editar-user']);
  }

  ngOnInit(): void {
  }

}
