import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { payment, product } from '../datatype';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public search = new BehaviorSubject<string>('');
  
  constructor(private http: HttpClient) { }
  
  addProduct(data: product) {
    return this.http.post("http://localhost:3000/productList", data);
  }
  getProduct() {
    return this.http.get<any>('http://localhost:3000/productList');
  }
  productList(id:string){
    return this.http.get<product>(`http://localhost:3000/productList/${id}`)
  }

  putProduct(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data)
  }

  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id)
  }
  buyProduct(data:any){
    return this.http.post<product>("http://localhost:3000/buyProduct/",data)

  }
  getOrder() {
    return this.http.get<any>("http://localhost:3000/buyProduct");
  }

  public clear(){
    localStorage.clear()
  }
 

}
