import { Component, OnInit } from '@angular/core';
import { Product } from '../modele/modele.product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product!:Product[]
  constructor(private productService:ProductsService) {
  
   }

  ngOnInit(): void {
    
    this.afficher()
  }

  afficher(){
    this.productService.lister("/products").subscribe(
       data => {
        this.product= data;
        
      }

    );
    

      
  
  }
}


