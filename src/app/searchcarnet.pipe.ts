import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'searchcarnet',
  pure: false,
})
export class SearchcarnetPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(item: any){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
    
  }

}
