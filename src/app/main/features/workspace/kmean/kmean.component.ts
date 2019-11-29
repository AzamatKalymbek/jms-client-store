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
import {AlgService} from "@core/alg.service";
import {Canvas} from "@core/canvas";

@Component({
    selector: 'app-kmean',
    templateUrl: './kmean.component.html',
    styleUrls: ['./kmean.component.scss']
})
export class KmeanComponent extends Canvas implements OnInit, OnChanges {

    @ViewChild('canvasEl') canvasEl: ElementRef;
    @Input() viaNearestNeighbor: boolean;
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();

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
        this.alg.getKmean(this.clusterCount, 50, this.viaNearestNeighbor).toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
            this.drawDots();
        })
    }

    addFQs(){
        let objTable = {
            name: this.viaNearestNeighbor ? 'Via nearest neighbor' : 'K - mean',
            fQuality: this.functionalQuality
        };
        this.addFQ.emit(objTable);
    }
}
