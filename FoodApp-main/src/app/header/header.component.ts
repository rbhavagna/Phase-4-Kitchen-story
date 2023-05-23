import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuyProductComponent } from '../buy-product/buy-product.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  product:any
  searchTerm !: string;
  filterCategory:any;
  searchKey:string=""
  constructor(private service:ProductService, private dialog:MatDialog){}
  ngOnInit(): void {

    this.getAllProduct()
  
   
    
  }

getAllProduct(){
  this.service.getProduct()
  .subscribe({
    next:(res)=>{
      this.product = res
    },
    error:(res)=>{
      alert("error while fetching")
    }
  })
  this.service.search.subscribe((val:any)=>{
    this.searchKey = val
  })
  this.filterCategory
}

search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value
  console.log(this.searchTerm)
  this.service.search.next(this.searchTerm)
}

filter(category:string){
  this.filterCategory = this.product
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a
    }
  })
}
}
