import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AlgService} from '@core/alg.service';
import {Canvas} from '@core/canvas';

@Component({
    selector: 'app-reduce',
    templateUrl: './reduce.component.html',
    styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent extends Canvas implements OnInit, OnChanges {
    @ViewChild('canvasEl4') canvasEl: ElementRef;
    @Input() clusterCount: number;
    initialValue = 7;
    reduceValue = 5;

    constructor(private alg: AlgService) {
        super();
    }

    ngOnInit(): void {
        this.drawCortesian(this.canvasEl);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['clusterCount']) {
            this.start();
        }
    }

    start() {
        this.alg.getReduce(this.initialValue, this.reduceValue).toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.drawDots();
        });
    }

}
