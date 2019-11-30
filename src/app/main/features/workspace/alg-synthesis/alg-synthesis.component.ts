import {Component, Input, OnInit} from '@angular/core';
import {AlgSyntethisService} from "@core/alg-syntethis.service";

@Component({
    selector: 'app-alg-synthesis',
    templateUrl: './alg-synthesis.component.html',
    styleUrls: ['./alg-synthesis.component.scss']
})
export class AlgSynthesisComponent implements OnInit {

    @Input() sourseFileName;
    deltaParam = 3;
    synth: any;
    maxi = 0;
    mini = 0;

    constructor(private algSynt: AlgSyntethisService) {
    }

    ngOnInit() {
        this.start();
    }

    start() {
        this.algSynt.getAlgSynthesis(this.sourseFileName, this.deltaParam).toPromise().then(res => {
            console.log('Function: res, Line 16 ()', res);
            this.synth = res;
            this.max();
            this.min();
        });
    }

    max() {
        this.maxi = Math.max(...this.synth.fqMatrix);
    }

    min() {
        this.mini = Math.min(...this.synth.fqMatrix);
    }
}
