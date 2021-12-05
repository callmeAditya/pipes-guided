import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertor'
})
export class ConvertorPipe implements PipeTransform {

  transform(value: any, ...args:any[]): any {
   
    let kmhr=  (value*1.609);
    let x='km'
    let t='hr'
   
    if(args.includes('m')){
      kmhr*=1000;
      x='m'
    }
    
    if(args.includes('s')){
      kmhr/=3600;
      t='s'
    }

 
  
    
    return kmhr.toFixed(2)+ ` ${x}/${t}`
  }

}
