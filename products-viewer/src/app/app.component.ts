import { Component, OnInit } from '@angular/core';
import { IProduct } from './model/product';
import { ProductService } from './service/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-viewer';
 
}
