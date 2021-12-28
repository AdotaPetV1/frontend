import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OngModel } from 'src/app/model/OngResponseModel';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { OrganizacaoService  } from 'src/app/service/organizacao.service';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {
  public listOng !: OngModel[];

  constructor(
    public loginService:LoginServiceService,
    private router: Router,
    private fb: FormBuilder,
    private OrganizacaoService : OrganizacaoService,
    private AnimalService : AnimalService
  ) { }

  ngOnInit(): void {
    this.getAllOng();
  }
  getAllOng(){
    this.OrganizacaoService.GetAllOngs().subscribe(response =>{
      this.listOng = response.data;
      console.log(this.listOng);
    });
  }

}
