import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { Product } from '../../../../models/product.model';
import { ProductInListComponent } from "../product-in-list/product-in-list.component";
import { FilterProductsComponent } from "../filter-products/filter-products.component";
import { FormsModule } from '@angular/forms';
import { FilterSearchPipe } from '../../../../pipes/filter-search.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductInListComponent, FilterProductsComponent, FormsModule, FilterSearchPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
  constructor(private _productService: ProductService) { }

  products: Product[] = [];
  currency:string =""
  allProducts: Product[] = [];
  searchTerm: string = '';
  urlPage:string = 'http://localhost'//todo
  ngOnInit(): void {
    this._productService.getProductList().subscribe({
      next: (products) => {
        this.products = products;
        this.allProducts = products; 
      },
      error: (error) => {
        console.error('Error fetching products: ', error);
      }
    })
    this.currency = this._productService.currency
  }
  filterProduct(parm:any):void {
    console.log('Filter  :'+parm)
    this.products = parm;
  }
}
