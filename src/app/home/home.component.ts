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

  constructor(
    private apiService: ApiService,
  ) { }
 
  
  ngOnInit(): void {
    this.getLatest();
  }

  checkValue(event: any,val){
    console.log(event);
    console.log("value ==>",val);
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
