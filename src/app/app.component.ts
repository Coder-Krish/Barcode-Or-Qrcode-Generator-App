import { Component } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public barcodeNumber:string = "";

  public Width: number = 1.5;

  public Height: number = 30;


  public fontSize: number = 14;

  public textMargin: number = 1;//this is not pixel, could be Percent.. (need to check.)

  barcodeMargin: number = 10;

  ngOnInit(){

  }

  generateBarcode(){
    JsBarcode("#barcode", this.barcodeNumber, {
      width: this.Width,
      height: this.Height,
      fontSize: this.fontSize,
      textMargin: this.textMargin,
      margin: this.barcodeMargin
  });
  }

}
