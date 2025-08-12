
import { Component, inject, OnInit } from '@angular/core';
import { Proall } from '../../app/services/proall';
import { iproduct } from '../../app/iproduct';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
 
  private readonly proall = inject(Proall)
  
  ngOnInit(): void {
    this.getProducts()
  }
  
  
  proList:iproduct[] = []

  getProducts():void{
  this.proall.getAllProducts().subscribe({
    next: (res) =>{
     this.proList = res
    },
    error:(err)=>{
 console.log(err);
 
    }
  })
}

}
