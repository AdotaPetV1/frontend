import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { HomeAuthenticateComponent } from './components/home-authenticate/home-authenticate.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterOngComponent } from './components/register-ong/register-ong.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterSelectComponent } from './components/register-select/register-select.component';
import { RegisterSenhaComponent } from './components/register-senha/register-senha.component';
import { RegisterSenhaOngComponent } from './components/register-senha-ong/register-senha-ong.component';
import { RegisterDogComponent } from './components/register-dog/register-dog.component';
import { EditOngComponent } from './components/edit-ong/edit-ong.component';
import { EditSelectComponent } from './components/edit-select/edit-select.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import {ForgotSenhaCodigoComponent} from './components/forgot-senha-codigo/forgot-senha-codigo.component'
import {ForgotSenhaEmailComponent} from './components/forgot-senha-email/forgot-senha-email.component'
import {ForgotSenhaNovaSenhaComponent} from './components/forgot-senha-nova-senha/forgot-senha-nova-senha.component'
import { AuthGuard } from './components/auth.guard';
import { PerfilCatComponent } from './components/perfil-cat/perfil-cat.component';
import { PerfilDogComponent } from './components/perfil-dog/perfil-dog.component';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { PhotoGaleryDogsComponent } from './components/photo-galery-dogs/photo-galery-dogs.component';
import { PhotoGaleryCatsComponent } from './components/photo-galery-cats/photo-galery-cats.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {path: '', component: HomeAuthenticateComponent, pathMatch:'full'},
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-ong', component: RegisterOngComponent },
  { path: 'cadastro-user', component: RegisterUserComponent },
  { path: 'cadastro', component: RegisterSelectComponent },
  { path: 'home-principal', component: HomePrincipalComponent },
  { path: 'home-visitante', component: HomeAuthenticateComponent },
  { path: 'cadastro-senha-user', component: RegisterSenhaComponent },
  { path: 'cadastro-senha-ong', component: RegisterSenhaOngComponent },
  { path: 'cadastro-dog', component: RegisterDogComponent },
  { path: 'editar-ong', component: EditOngComponent },
  { path: 'editar-user', component: EditUserComponent },
  { path: 'editar', component: EditSelectComponent },
  { path: 'esqueceu-senha-email', component: ForgotSenhaEmailComponent },
  { path: 'esqueceu-senha-codigo', component: ForgotSenhaCodigoComponent },
  { path: 'esqueceu-senha-nova-senha', component: ForgotSenhaNovaSenhaComponent },
  { path: 'perfil-cat', component: PerfilCatComponent },
  { path: 'perfil-dog', component: PerfilDogComponent },
  { path: 'editar-dog', component: EditDogComponent },
  { path: 'contribuicoes', component: ContributionsComponent },
  { path: 'galeria-de-fotos-dogs', component: PhotoGaleryDogsComponent },
  { path: 'galeria-de-fotos-cats', component: PhotoGaleryCatsComponent },
  { path: 'detalhe', component: DetailComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

