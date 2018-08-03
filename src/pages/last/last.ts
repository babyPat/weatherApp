import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the LastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-last',
  templateUrl: 'last.html',
})
export class LastPage {
 
  info;
  infoList;
  place;

  // main;
  // high;
  // low;

  convert;

  tempConveter;


  doRefresh(refresher) {

    console.log('Begin async operation', refresher);

    this.data.getData(this.place).subscribe(dataInfo=>{
      this.info= dataInfo;
    })
    
  

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
 

  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider) {

    
    this.data.getData(this.place).subscribe(dataInfo =>{
      console.log(dataInfo)
      this.infoList=dataInfo
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LastPage');
  }

  
  onInput(){
    console.log(this.place);
    this.data.getData(this.place).subscribe(dataInfo=>{
      this.info= dataInfo;
      this.tempConveter =this.info.main.temp;
      console.log(this.tempConveter)
    })
    // this.change();
  }

  getValues(){
    this.data.getData(this.place).subscribe(dataInfo=>{
      this.info=dataInfo;
      console.log(this.info);
    
    });

  }

  change(selectedValue:any){

    if(this.convert =="method4"){
      this.tempConveter = this.tempConveter - 273.15;
    }
    else if(this.convert =="method2"){
      this.tempConveter =(this.tempConveter *9/5)+32;
    }

  }

 
}

