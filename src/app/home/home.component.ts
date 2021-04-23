import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latest: any;
  orignalTher=[];
  filteredTher=[];
  isChecked=false;
  checkedArray =[];

  constructor(
    private apiService: ApiService,
  ) { }
 
  
  ngOnInit(): void {
    this.getLatest();
  }

  checkValue(checkedValue,val){
    // console.log(event);
    // checkedArray
    console.log("value ==>",val);
    if(!checkedValue){
      const index = this.checkedArray.indexOf(val);
      if (index > -1) {
        this.checkedArray.splice(index, 1);
      }
      
      // array = [2, 9]
      console.log(this.checkedArray); 
    }
    else{
      this.checkedArray.push(val);
    }
    console.log("checked Array",this.checkedArray); 
 }
 shouldDisplay(item){
   debugger
if( this.checkedArray.length){
  let x=true;
   item.map((it)=>{
    if(this.checkedArray.indexOf(it)){
      const index = this.checkedArray.indexOf(it.name);
      if(index===0){
        x=false;
        return true;
      
      }
      // else{
      //   return false;
      // }
     
        }
        if(x===true){
          return false;
        }
   })
  }
  else{
    return true;
  }
  //  return true;
 
 

 }
  getLatest(): void {

    this.apiService.getLatestReleases()
    .subscribe((latest) => {

      // console.log(
      //   'data =====> ',latest);

       this.latest = latest;
       this.latest.map((lat)=>{
         lat.therapeutics.map((ther)=>{
           this.orignalTher.push(ther.name)
         })
       });

    });

    // console.log("whole data ===>",this.orignalTher);
    // if(this.orignalTher){
    //   console.log("real     jsjsjs data ===>",this.orignalTher);
    //   // this.orignalTher
    // console.log("filtered data ===>",Array.from(new Set(this.orignalTher)))
    // }
  }
}
