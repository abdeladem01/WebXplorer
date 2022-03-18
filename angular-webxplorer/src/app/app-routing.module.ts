import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninSignupComponent} from "./signin-signup/signin-signup.component";
import {TitlePageComponent} from "./title-page/title-page.component";
import {GuestOrConnectComponent} from "./guest-or-connect/guest-or-connect.component";

const routes: Routes = [
  {path: 'sign', component: SigninSignupComponent},
  {path: 'home', component: TitlePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'playas', component: GuestOrConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
