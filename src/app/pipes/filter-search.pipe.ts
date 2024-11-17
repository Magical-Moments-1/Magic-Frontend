import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  standalone: true
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.he.toLowerCase().includes(searchText)|| item.name.en.toLowerCase().includes(searchText);
    });
  }
}

