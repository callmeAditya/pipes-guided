import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ConvertorPipe } from './convertor.pipe';
import { IntrojsService } from './introjs.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ConvertorPipe
  ],
  imports: [
    BrowserModule,
    IntrojsService
  ],
  exports:[
    IntrojsService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
