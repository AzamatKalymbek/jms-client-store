import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alg',
  templateUrl: './alg.component.html'
})
export class AlgComponent {
  clusterCount = 3;
  algTable = [];
  maxi = 0;
  mini = 0;

  addFQ(obj){
    this.algTable.push(obj);
    this.max();
    this.min();
  }

  max() {
    this.maxi = this.algTable.reduce((a, b) => {
      if(a.fQuality === undefined){
        return Math.max(a, b.fQuality);
      }else{
        return Math.max(a.fQuality, b.fQuality);
      }
    });
  }

  min() {
    this.mini = this.algTable.reduce((a, b) => {
      if(a.fQuality === undefined){
        return Math.min(a, b.fQuality);
      }else{
        return Math.min(a.fQuality, b.fQuality);
      }
    });
  }
}
