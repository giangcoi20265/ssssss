import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent {
  @Input() data!:IProduct
}
