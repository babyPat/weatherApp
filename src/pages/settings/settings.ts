import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

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
  
  info;
  infoList;
  place ="pretoria";

  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider ) {

    
    this.data.getData(this.place).subscribe(dataInfo =>{
      console.log(dataInfo)
      this.infoList=dataInfo
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onInput(){
    console.log(this.place);
    this.data.getData(this.place).subscribe(dataInfo=>{
      this.info= dataInfo;
    })
  }

  

}
