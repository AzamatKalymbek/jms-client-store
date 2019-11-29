import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alg',
  templateUrl: './alg.component.html'
})
export class AlgComponent {
  clusterCount = 3;
  algTable = [];

  addFQ(obj){
    this.algTable.push(obj);
  }

}
