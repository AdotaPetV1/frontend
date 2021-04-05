import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterOngComponent } from './components/register-ong/register-ong.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterSelectComponent } from './components/register-select/register-select.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LogInComponent },
  { path: 'cadastro-ong', component: RegisterOngComponent },
  { path: 'cadastro-user', component: RegisterUserComponent },
  { path: 'cadastro', component: RegisterSelectComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

