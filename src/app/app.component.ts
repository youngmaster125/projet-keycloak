import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from './service/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(public securityService:KeycloakSecurityService){

  }
  ngOnInit(): void {
  
  }
  title = 'projetKeycloak';
   async login(){
   await this.securityService.kcService.login({
      redirectUri:window.location.origin
    })
  }

  logout() {
    this.securityService.kcService.logout(window.location.origin)
    console.log("logout")
    }
    isAppManager(): any {
      return this.securityService.kcService.isUserInRole('app-manager')
      }
      onChangePassword() {
        console.log(this.securityService.kcService.getKeycloakInstance())
        this.securityService.kcService.getKeycloakInstance()
        .accountManagement()
      } 
}
