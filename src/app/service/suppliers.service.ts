import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../modele/modele.supplier';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  supplierUrl:any 
  constructor(private httpRequest:HttpClient,public securityService:KeycloakSecurityService) { 
  
    this.supplierUrl="http://localhost:8082"
 
    }
 // methode affficher()
    public lister(uri:string) : Observable<Supplier[]> {
      return this.httpRequest.get<Supplier[]>(this.supplierUrl+uri);
      
    }
}
/*
,{
        headers:new HttpHeaders({
          Authorization:'Bearer '+this.securityService.kcService.getToken
        })
      }
*/