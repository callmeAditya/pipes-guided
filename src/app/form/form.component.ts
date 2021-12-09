import { Component, OnInit , Input} from '@angular/core';
import { IntrojsService } from '../introjs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private introService:IntrojsService) { }

  ngOnInit(): void {
  }
  name='';
  date='';
  amount=0;
  height=0;
  miles=0;

  onMilesChange(event:Event){
    const milevalue=event.target as HTMLInputElement;
    this.miles=parseFloat(milevalue.value)
  }

  onHeightChange(event:Event){
    const heightvalue= event.target as HTMLInputElement
    this.height=parseFloat(heightvalue.value)
  }

  onInputChange(event:Event){
    const stringvalue= event.target as HTMLInputElement
    this.name=stringvalue.value;
  }

  onDateChange(event:Event){
    const stringvalue= event.target as HTMLInputElement
    this.date=stringvalue.value
  }

  onAmountChange(event:Event){
    const amountvalue=event.target as HTMLInputElement;
    this.amount=Number(amountvalue.value)

  }
  ngAfterViewInit(): void {
    this.introService.getfeature();
}
}
