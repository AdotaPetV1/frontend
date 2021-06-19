import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterOngComponent } from './components/register-ong/register-ong.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterSelectComponent } from './components/register-select/register-select.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditOngComponent } from './components/edit-ong/edit-ong.component';
import { RegisterSenhaComponent } from './components/register-senha/register-senha.component';
import { ForgotSenhaEmailComponent } from './components/forgot-senha-email/forgot-senha-email.component';
import { ForgotSenhaCodigoComponent } from './components/forgot-senha-codigo/forgot-senha-codigo.component';
import { ForgotSenhaNovaSenhaComponent } from './components/forgot-senha-nova-senha/forgot-senha-nova-senha.component';
import { RegisterSenhaOngComponent } from './components/register-senha-ong/register-senha-ong.component';
import { RegisterDogComponent } from './components/register-dog/register-dog.component';
import { RegisterCatComponent } from './components/register-cat/register-cat.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { HomeAuthenticateComponent } from './components/home-authenticate/home-authenticate.component';
import { HttpClientModule } from '@angular/common/http';
import { EditSelectComponent } from './components/edit-select/edit-select.component';
import { RegisterPetSelectComponent } from './components/register-pet-select/register-pet-select.component';
import { EditPetSelectComponent } from './components/edit-pet-select/edit-pet-select.component';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';
import { PhotoGaleryDogsComponent } from './components/photo-galery-dogs/photo-galery-dogs.component';
import { PhotoGaleryCatsComponent } from './components/photo-galery-cats/photo-galery-cats.component';
import { ContributionsComponent } from './components/contributions/contributions.component';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterOngComponent,
    RegisterOngComponent,
    LogInComponent,
    HomeComponent,
    RegisterSelectComponent,
    RegisterUserComponent,
    EditUserComponent,
    EditOngComponent,
    RegisterSenhaComponent,
    ForgotSenhaEmailComponent,
    ForgotSenhaCodigoComponent,
    ForgotSenhaNovaSenhaComponent,
    RegisterSenhaOngComponent,
    RegisterDogComponent,
    RegisterCatComponent,
    HomePrincipalComponent,
    HomeAuthenticateComponent,
    EditSelectComponent,
    RegisterPetSelectComponent,
    EditPetSelectComponent,
    EditCatComponent,
    EditDogComponent,
    PhotoGaleryDogsComponent,
    PhotoGaleryCatsComponent,
    ContributionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }