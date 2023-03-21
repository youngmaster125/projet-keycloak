import { Component, OnInit } from '@angular/core';
import { Supplier } from '../modele/modele.supplier';
import { SuppliersService } from '../service/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  suppliers!:Supplier[]
  constructor(private supplierService:SuppliersService) {
  
   }
   message:any

  ngOnInit(): void {
    
    this.afficher()
  }

  afficher(){
    this.supplierService.lister("/suppliers").subscribe(
       data => {
        this.suppliers= data;
      },err=>{
        this.message=err.error
        console.log(err)
      }

    );
    

      
  
  }

}
