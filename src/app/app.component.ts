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

  public barcodeMargin: number = 10;

  public fileDirectory:string = "";

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

  // generateQrCode(){
  //   var Canvas = require('canvas')
  //     , Image = Canvas.Image
  //     , qrcode = require('jsqrcode')(Canvas)
 
  //   var filename = this.fileDirectory + '/qrcode.png'
 
  //   var image = new Image()
  //   image.onload = function(){
  //     var result;
  //     try{
  //       result = qrcode.decode(image);
  //       console.log('result of qr code: ' + result);
  //     }catch(e){
  //       console.log('unable to read qr code');
  //     }
  //   }
  //   image.src = filename
  // }
}
