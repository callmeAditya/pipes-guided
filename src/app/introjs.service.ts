import { Injectable, NgModule } from '@angular/core';
import * as introJs from 'intro.js';
@Injectable({
  providedIn: 'root'
})

@NgModule({

})
export class IntrojsService {

  constructor() { }

  getfeature(){
  let introJS=introJs().start();
    introJS.setOptions({
      steps:[
        {
          element:document.getElementById('1') as HTMLElement,
          title:'Enter Name',
          intro:'Enter your name',
          position:'left'
        },
        {
          element:document.getElementById('2') as HTMLElement,
          title:'Enter date',
          intro:'Enter date in dd-mm-yy',
          position:'left'
        },
        {
          element:document.getElementById('3') as HTMLElement,
          title:'Enter money',
          intro:'Enter money in USD',
          position:'left'
        },
        {
          element:document.getElementById('4') as HTMLElement,
          title:'Enter height',
          intro:'Enter height in cms',
          position:'left'
        },
        {
          element:document.getElementById('5') as HTMLElement,
          title:'Enter speed',
          intro:'Enter speed in ml/h',
          position:'left'
        }
      ]
    }).start()


}



}
