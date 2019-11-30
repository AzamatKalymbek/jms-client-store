import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AlgService} from "@core/alg.service";

@Component({
    selector: 'app-maxmin-table',
    templateUrl: './maxmin-table.component.html',
    styleUrls: ['./maxmin-table.component.scss']
})
export class MaxminTableComponent implements OnInit, OnChanges {
    @Input() viaMatrixDistance: boolean;
    @Input() viaNearestNeighbor: boolean;
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();
    functionalQuality = 0.0;
    clusters = [];

    constructor(private alg: AlgService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['clusterCount']) {
            this.start();
        }
    }

    start() {
        this.alg.getMaxmin(this.clusterCount, 50, this.viaNearestNeighbor, this.viaMatrixDistance).toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
        })
    }

    addFQs() {
        let objTable = {
            name: (this.viaNearestNeighbor ? 'Nearest neighbor  + Max - Min' : 'Max - Min + K-mean') +
                (this.viaMatrixDistance ? ' (via matrix distance) ' : ''),
            fQuality: this.functionalQuality
        };
        this.addFQ.emit(objTable);
    }

}
