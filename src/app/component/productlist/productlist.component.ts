import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { HeroService } from 'src/app/service/hero.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  // products: IProduct[]= [
  //   {_id : 1, name:"sp a", price:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1z8l_wFlkRqbJ09QPv7U8W1ogSFsJkJeXxJUyNnH&s"},
  //   {_id : 2, name:"sp b", price:100,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1z8l_wFlkRqbJ09QPv7U8W1ogSFsJkJeXxJUyNnH&s"},
  //   {_id : 3, name:"sp c", price:100,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1z8l_wFlkRqbJ09QPv7U8W1ogSFsJkJeXxJUyNnH&s"},
  // ]
  status: boolean =false;
  productsName=""
  products:IProduct[]=[]
  product! :IProduct;
  constructor(private heroService: HeroService) {
    this.heroService.getProducts().subscribe(data=>{
      this.products=data
    })
   }

  getValue(e:any){
    this.productsName= e.target.value;
  }
  changeStatus(){
    this.status=!this.status;
  }
  itemRemove(id:any){
    // this.products=  this.products.filter(item=> item.id !== id)
    this.heroService.deleteProduct(id).subscribe(()=>{
      this.products=this.products.filter(item=> item.id !== id)
    },(error)=>{
      console.log(error)
    })
  }
  getInfo(product:IProduct){
    console.log(product)
    this.product=product;
  }
}
