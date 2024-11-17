import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../../services/category/category.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
constructor(public _categoryService: CategoryService){}

ngOnInit(): void{
  if(this._categoryService.topCategories.length == 0){
    this._categoryService.getTopCategories();
  }
}
}
