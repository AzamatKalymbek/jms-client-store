import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AlgService} from "@core/alg.service";

@Component({
    selector: 'app-avo-table',
    templateUrl: './avo-table.component.html',
    styleUrls: ['./avo-table.component.scss']
})
export class AvoTableComponent implements OnInit, OnChanges {
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();
    gammaParam = 0;
    gammaParamList = [];
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
        this.alg.getAvo(this.clusterCount, 50, this.gammaParam, "data.txt").toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
            const gammaParamSize = this.clusters[0].objects[0].attributes.length;
            for (let i = 0; i < gammaParamSize; i++) {
                this.gammaParamList.push(i);
            }
            this.objectsCount();
        });
    }

    addFQs() {
        const objTable = {
            name: 'AVO',
            fQuality: this.functionalQuality
        };
        this.addFQ.emit(objTable);
    }

    objectsCount() {
        for (const cluster of this.clusters){
            this.objCount += cluster.objects.length;
        }
    }
}
