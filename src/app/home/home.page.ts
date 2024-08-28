import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

  items=[
    {
      id:1,
      name:'Product A',
      Price:200,
      detail:'this is a Product A',
      imageurl:  'https://media-cdn.bnn.in.th/37984/DualSense-Wireless-1-square_medium.jpg',
    },
    {
      id:2,
      name:'Product B',
      Price:250,
      detail:'this is a Product B',
       imageurl: 'https://media-cdn.bnn.in.th/284122/Onikuma-Gaming-Mouse-Fuji-Purple-1-square_medium.jpg',
    },
    {
      id:3,
      name:'Product C',
      Price:300,
      detail:'this is a Product C',
       imageurl: 'https://media-cdn.bnn.in.th/283354/Onikuma-Gaming-Headset-X15-Pro-RGB-3.5-Cat-Ear-Pink-1-square_medium.jpg',
    },
    {
      id:4,
      name:'Product D',
      Price:350,
      detail:'this is a Product D',
       imageurl: 'https://res.cloudinary.com/itcity-production/image/upload/f_jpg,q_80/v1649063460/product/product-master/por7hoob0ir5orkle8qo.jpg',
    },
  ]

  gotodetail(i:any){
      this.detail.navigateForward('/detail',{state:{i}})
  }
  


}

