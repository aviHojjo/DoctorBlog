import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fetched=false;
  latest: any;
  orignalTher = [];
  filteredTher = [];
  isChecked = false;
  checkedArray = [];

  constructor(
    private apiService: ApiService,
  ) { }


  ngOnInit(): void {
    this.getLatest();
  }

  checkValue(checkedValue, val) {
    console.log("value ==>", val);
    if (!checkedValue) {
      const index = this.checkedArray.indexOf(val);
      if (index > -1) {
        this.checkedArray.splice(index, 1);
      }

      console.log(this.checkedArray);
    }
    else {
      this.checkedArray.push(val);
    }
  
  }
  shouldDisplay(item) {

    if (this.checkedArray.length) {
      let x = true;
      item.map((it) => {
        if (this.checkedArray.indexOf(it)) {
          const index = this.checkedArray.indexOf(it.name);
          if (index === 0) {
            x = false;

          }

        }

      })
      if (x === true) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }


  }

  getLatest(): void {

    this.apiService.getLatestData()
      .subscribe((latest) => {
        if(!this.fetched){

        this.latest = latest;
        this.latest.map((lat) => {
          lat.therapeutics.map((ther) => {
            this.orignalTher.push(ther.name)
          })
        });
        this.fetched=true;
      }
      });

  }
}
