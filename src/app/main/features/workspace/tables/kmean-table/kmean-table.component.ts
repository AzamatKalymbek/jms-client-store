import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AlgService} from '@core/alg.service';

@Component({
    selector: 'app-kmean-table',
    templateUrl: './kmean-table.component.html',
    styleUrls: ['./kmean-table.component.scss']
})
export class KmeanTableComponent implements OnInit, OnChanges {
    @Input() viaNearestNeighbor: boolean;
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();
    functionalQuality = 0.0;
    clusters = [];

    objCount = 0;

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
        this.alg.getKmean(this.clusterCount, 50, this.viaNearestNeighbor, 'data.txt').toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
            this.objectsCount();
        });
    }

    addFQs() {
        const objTable = {
            name: this.viaNearestNeighbor ? 'Via nearest neighbor' : 'K - mean',
            fQuality: this.functionalQuality
        };
        this.addFQ.emit(objTable);
    }

    objectsCount() {
        for (const cluster of this.clusters) {
            this.objCount += cluster.objects.length;
        }
    }
}
