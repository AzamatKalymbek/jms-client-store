import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AlgService} from "@core/alg.service";

@Component({
    selector: 'app-reduce-table',
    templateUrl: './reduce-table.component.html',
    styleUrls: ['./reduce-table.component.scss']
})
export class ReduceTableComponent implements OnInit, OnChanges {
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();
    initialValue = 5;
    reduceValue = 3;
    functionalQuality = 0.0;
    clusters = [];
    objCount = 0;

    constructor(private alg: AlgService) {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['clusterCount']) {
            this.start();
        }
    }

    start() {
        this.alg.getReduce(this.initialValue, this.reduceValue, 'data.txt').toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
            this.objectsCount();
        });
    }


    addFQs() {
        const objTable = {
            name: 'Reduce centroid (from ' + this.initialValue + ' to ' + this.reduceValue + ')',
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
