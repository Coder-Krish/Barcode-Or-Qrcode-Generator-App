import { Component, ElementRef, ViewChild } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public dataToConvert:string = "";

  public Width: number = 2.5;

  public Height: number = 40;


  public fontSize: number = 14;

  public textMargin: number = 1;//this is not pixel, could be Percent.. (need to check.)

  public barcodeMargin: number = 10;

  public dataToConvertIntoQR:string = "bogatikrishna.com.np";

  public displayQrCode:boolean = false;
  public displayBarCode:boolean = false;
  public showError:boolean = false;



  @ViewChild('dataToconvertToRef')dataToconvertToRef!:ElementRef;

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.dataToconvertToRef.nativeElement.focus();
  }

  generateBarcode(){
    this.displayQrCode = false;
    if(this.dataToConvert){
      this.displayBarCode = true;
      this.showError = false;
      JsBarcode("#barcode", this.dataToConvert, {
        width: this.Width,
        height: this.Height,
        fontSize: this.fontSize,
        textMargin: this.textMargin,
        margin: this.barcodeMargin
    });
    }else{
      this.showError = true;
      this.displayBarCode = false;
    }
  }

  generateQrCode(){
    this.displayBarCode = false;
    if(this.dataToConvert){
      this.showError = false;
      this.displayQrCode = true;
      this.dataToConvertIntoQR = this.dataToConvert;
    }else{
      this.displayQrCode = false;
      this.showError = true;
    }
  }
}
