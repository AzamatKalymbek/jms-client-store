import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {AlgService} from '@core/alg.service';
import {Canvas} from '@core/canvas';

@Component({
    selector: 'app-maxmin',
    templateUrl: './maxmin.component.html',
})
export class MaxminComponent extends Canvas implements OnInit, OnChanges {

    @ViewChild('canvasEl1') canvasEl: ElementRef;
    @Input() viaMatrixDistance: boolean;
    @Input() viaNearestNeighbor: boolean;
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();

    constructor(private alg: AlgService) {
        super();
    }

    ngOnInit() {
        this.drawCortesian(this.canvasEl);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['clusterCount']) {
            this.start();
        }
    }

    start() {
        this.alg.getMaxmin(this.clusterCount, 50, this.viaNearestNeighbor, this.viaMatrixDistance, '2d_data.txt').toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
            this.drawDots();
        });
    }

    addFQs() {
        const objTable = {
            name: (this.viaNearestNeighbor ? 'Nearest neighbor  + Max - Min' : 'Max - Min + K-mean') +
                  (this.viaMatrixDistance  ? ' (via matrix distance) ' : ''),
            fQuality: this.functionalQuality
        };
        this.addFQ.emit(objTable);
    }
}
