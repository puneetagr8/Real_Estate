import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  home:any;
  feature:any;
  details_person:any;
  constructor() { }
  homeDetails = [
    {
      id:1,
      houseimg: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg",
      houseprice:"$20000",
      bedroom:2,
      bathroom:3,
      garageaccess:2,
      address:"Dabok, Udaipur"
    },
    
    {
      id:2,
      houseimg: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg",
      houseprice:"$30000",
      bedroom:3,
      bathroom:4,
      garageaccess:2,
      address:"Ranapratapnagar, Udaipur"
    },
    
    {
      id:3,
      houseimg: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      houseprice:"$100000",
      bedroom:5,
      bathroom:6,
      garageaccess:4,
      address:"Sector 14, Udaipur"
    },
    
    {
      id:4,
      houseimg: "mamtaInd\src\app\pages\home\image1.jpg",
      houseprice:"$50000",
      bedroom:3,
      bathroom:3,
      garageaccess:2,
      address:"industrial area,udaipur"
    },
    
    {
      id:1,
      houseimg: "mamtaInd\src\app\pages\home\image1.jpg",
      houseprice:"$70000",
      bedroom:4,
      bathroom:5,
      garageaccess:3,
      address:"bhuvana,udaipur"
    }, 
  ]
  features =[
    {
      id:1,
      tagline:"Understanding the Market",
      summery:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate sapiente et in quas architecto. Amet sed rerum mollitia beatae enim recusandae alias sunt quibusdam." 
    },
    {
      id:2,
      tagline:"Understanding the Market",
      summery:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate sapiente et in quas architecto. Amet sed rerum mollitia beatae enim recusandae alias sunt quibusdam." 
    },
    {
      id:3,
      tagline:"Understanding the Market",
      summery:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate sapiente et in quas architecto. Amet sed rerum mollitia beatae enim recusandae alias sunt quibusdam."
    },  
  ]
  detail=[
    {
      id:1,
      image:"//i.pinimg.com/236x/7d/34/2f/7d342f7b7e7c99644450b8a3b784dbb8.jpg",
      name:"Puneet Agrawal",
      position:"CEO"
    },
    {
      id:2,
      image:"https://i.pinimg.com/236x/20/cd/e2/20cde299ca352aee02987c4f92ba5110.jpg",
      name:"Aditya Chamadia",
      position:"CFO"
    },
    {
      id:1,
      image:"//i.pinimg.com/236x/7d/34/2f/7d342f7b7e7c99644450b8a3b784dbb8.jpg",
      name:"Puneet Agrawal",
      position:"CEO"
    },
    {
      id:2,
      image:"https://i.pinimg.com/236x/20/cd/e2/20cde299ca352aee02987c4f92ba5110.jpg",
      name:"Aditya Chamadia",
      position:"CFO"
    },
    {
      id:1,
      image:"//i.pinimg.com/236x/7d/34/2f/7d342f7b7e7c99644450b8a3b784dbb8.jpg",
      name:"Puneet Agrawal",
      position:"CEO"
    },
    {
      id:2,
      image:"https://i.pinimg.com/236x/20/cd/e2/20cde299ca352aee02987c4f92ba5110.jpg",
      name:"Aditya Chamadia",
      position:"CFO"
    }
  ]
}
