import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OngModel } from 'src/app/model/OngResponseModel';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { AnimalService } from 'src/app/service/animal.service';
import { OrganizacaoService  } from 'src/app/service/organizacao.service';
import Swal from 'sweetalert2';
import { AnimalModel } from 'src/app/model/AnimalResponseModel';


@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit {

  public animalUpdateForm! : FormGroup;
  public listOng !: OngModel[];
  public listAnimal!: AnimalModel[];

  constructor(
    public loginService:LoginServiceService,
    private router: Router,
    private fb: FormBuilder,
    private OrganizacaoService : OrganizacaoService,
    private AnimalService : AnimalService
  ) {}

  ngOnInit(): void {

    this.getAllOng();
    this.getAllAnimal();

    this.animalUpdateForm = this.fb.group({
      TipoAnimal: [ '', [Validators.required]],
      Nome: [ '', [Validators.required]],
      Raca: [ '', [Validators.required]],
      Porte: [ '', [Validators.required]],
      Idade: [ '', [Validators.required]],
      Sexo: [ '', [Validators.required]],
      IdOrgResponsavel: [ '', [Validators.required]],
      Descricao: [ '', [Validators.required]],
      IdAnimal: [ '', [Validators.required]],

    });


  }

  DoUpdateAnimal(){

    let animal = {
      TipoAnimal : this.animalUpdateForm.value.TipoAnimal,
      Nome: this.animalUpdateForm.value.Nome,
      Raca : this.animalUpdateForm.value.Raca,
      Porte: this.animalUpdateForm.value.Porte,
      Idade : this.animalUpdateForm.value.Idade,
      Sexo: this.animalUpdateForm.value.Sexo,
      IdOrgResponsavel : this.animalUpdateForm.value.IdOrgResponsavel,
      Descricao: this.animalUpdateForm.value.Descricao,
      IdAnimal: this.animalUpdateForm.value.IdAnimal
      

    }

    this.AnimalService.DoAnimalUpdate(animal).subscribe(response =>{
      
      //Valida se ele trouxe um usuário com as informações passada
      if(response){
        
        //redireciona para a home completa
       this.router.navigate(['editar-dog'])
        //Exemplo de utilização do Alert, mas aqui deve vir a lógica para trocar de página
        return Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: "Animal Editado com sucesso!",
          
        
        } );
          
      }
      else{
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Ocorreu um erro ao tentar Editar Animal !"
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

  getAllOng(){
    this.OrganizacaoService.GetAllOngs().subscribe(response =>{
      this.listOng = response.data;
      console.log(this.listOng);
    });
  }
  getAllAnimal(){
    let uf = { UF : 'MG' }

    this.AnimalService.GetAllAnimal(uf).subscribe(response =>{
      this.listAnimal = response.data;
      console.log(this.listAnimal, );
    });
  }
  /*DoUpdateAnimal33(){
    let id = { IdAnimal: this.animalRegisterForm.value.IdOrgResponsavel, Nome: this.animalRegisterForm.value.Nome, }
    this.AnimalService.DoAnimalUpdate(id).subscribe(response =>{
      
      this.listAnimal = response.data;
      console.log(this.listAnimal, );
    });
  }*/
  
}