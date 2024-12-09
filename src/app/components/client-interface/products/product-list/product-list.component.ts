import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../‏‏services/product/product.service';
import { Product } from '../../../../models/product.model';
import { ProductInListComponent } from "../product-in-list/product-in-list.component";
import { FilterProductsComponent } from "../filter-products/filter-products.component";
import { FormsModule } from '@angular/forms';
import { FilterSearchPipe } from '../../../../pipes/filter-search.pipe';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { state } from '@angular/animations';
import { filter } from 'rxjs';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../‏‏services/category/category.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductInListComponent, FilterProductsComponent, FormsModule, FilterSearchPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }
  category?: Category  
  products: Product[] = [];
  currency: string = ""
  urlPageBasic: string = 'כל המתנות'
  urlPage: string = ""

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      if (window.history.state.id != null) {
       this._categoryService.getCategoryById(window.history.state.id).subscribe({
          next: (data) => {
            this.category = data;
          },
          error: (err) => {
            console.error('Error:', err);
          }
        })
        this.urlPage = this.urlPageBasic + "/" + window.history.state.top.name + "/" + window.history.state.name;
      }
      this._productService.getProductsByCatId(window.history.state.id).subscribe({
        next: (data) => {
          this._productService.productList = data;
          this.products = this._productService.productList
        },
        error: (err) => {
          console.error('Error:', err);
        }
      })
    })
    this.currency = this._productService.currency
  }


  filterProduct(parm: any): void {
    this.products = parm;
  }
sortProducts(parm: any): void {
  this.products.sort((a, b) => this.sortBy(a, b, parm));
}
sortBy(a: any, b: any, parm: any): any {
  switch (parm) {
    case 'price-asc':
      return a.price - b.price;
    case 'price-desc':
      return b.price - a.price;
    case 'name-asc':
      return a.name.localeCompare(b.name);
    case 'name-desc':
      return b.name.localeCompare(a.name);
    default:
      return 0;
  }
}
}
