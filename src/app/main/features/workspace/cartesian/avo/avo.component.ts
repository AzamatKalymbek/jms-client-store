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
import {Canvas} from "@core/canvas";
import {AlgService} from "@core/alg.service";

@Component({
    selector: 'app-avo',
    templateUrl: './avo.component.html',
})
export class AvoComponent extends Canvas implements OnInit, OnChanges {
    @ViewChild('canvasEl2') canvasEl: ElementRef;
    @Input() clusterCount: number;
    @Output() addFQ: EventEmitter<any> = new EventEmitter<any>();
    gammaParam = 0;
    gammaParamList = [];

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
        this.alg.getAvo(this.clusterCount, 50, this.gammaParam, "2d_data.txt").toPromise().then(response => {
            this.clusters = response.ALG;
            this.functionalQuality = response.FQ;
            this.addFQs();
            let gammaParamSize = this.clusters[0].objects[0].attributes.length;
            for (let i = 0; i < gammaParamSize; i++) {
                this.gammaParamList.push(i);
            }
            this.drawDots();
        });
    }

    addFQs(){
        let objTable = {
            name: 'AVO',
            fQuality: this.functionalQuality
        };
        this.addFQ.emit(objTable);
    }
}
