import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modele/modele.product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl:any 
  constructor(private httpRequest:HttpClient) { 
  
    this.productUrl="http://localhost:8082"
 
    }
 // methode affficher()
    public lister(uri:string) : Observable<Product[]> {
      return this.httpRequest.get<Product[]>(this.productUrl+uri);
      
    }
   
}
