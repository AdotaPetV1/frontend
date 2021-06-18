import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet-select',
  templateUrl: './edit-pet-select.component.html',
  styleUrls: ['./edit-pet-select.component.css']
})
export class EditPetSelectComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToEditCat(){
    this.router.navigate(['./editar-cat']);
  }
  goToEditDog(){
    this.router.navigate(['./editar-dog']);
  }
}
