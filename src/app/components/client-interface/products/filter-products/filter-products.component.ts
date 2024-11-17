import { Component, Input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {
  ngOnChanges(): void {
   this.handleFilter() 
  }
  @Input() products: Product[] = [];
  filterProducts  = output<any>()  
  filterForm: FormGroup = new FormGroup({
    embroidery: new FormControl(false),
    caption: new FormControl(false),
    shipping: new FormControl(false),
    sale: new FormControl(false),
    minPrice: new FormControl(0),
    maxPrice: new FormControl(1000)
  })
  handleFilter(){
const filters = this.filterForm.value;

this.filterProducts.emit( this.products.filter((product) => {
    let meetsCriteria = true;
    if (filters.embroidery && !product.embroidery) {
      meetsCriteria = false;
    }
    if (filters.caption && !product.caption) {
      meetsCriteria = false;
    }
    if (filters.shipping && product.specialDelivery) {
      meetsCriteria = false;
    }
    if (filters.sale && !product.inSale) {
      meetsCriteria = false;
    }
    if ((product.inSale ? product.salePrice!.nis: product.price!.nis) <= filters.minPrice ||(product.inSale ? product.salePrice!.nis: product.price!.nis )>= filters.maxPrice) {
      meetsCriteria = false;
    }
    return meetsCriteria;
  }));
  }
}
