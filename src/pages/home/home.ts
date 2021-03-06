import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  info;
  infoList;
  place="pretoria";

  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider ) {
    // this.data.getData().subscribe(data=>{

    //   this.info = data;
    //   console.log(this.info);
  
    //   this.infoList = this.info.data;
    //  })

    this.data.getData(this.place).subscribe(dataInfo =>{
      console.log(dataInfo)
      this.infoList=dataInfo
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  changeMethod(){
    console.log(this.place);
    this.data.getData(this.place).subscribe(dataInfo=>{
      this. info= dataInfo;
    })
  }

}
