import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkspaceComponent} from './workspace.component';
import {WorkspaceRoutingModule} from './workspace-routing.module';
import {FormsModule} from "@angular/forms";
import { KmeanComponent } from './kmean/kmean.component';
import { MaxminComponent } from './maxmin/maxmin.component';
import { AvoComponent } from './avo/avo.component';
import { ReduceComponent } from './reduce/reduce.component';
import { AlgComponent } from './alg/alg.component';
import { AlgSynthesisComponent } from './alg-synthesis/alg-synthesis.component';

@NgModule({
    imports: [
        CommonModule,
        WorkspaceRoutingModule,
        FormsModule,
    ],
    declarations: [WorkspaceComponent, KmeanComponent, MaxminComponent, AvoComponent, ReduceComponent, AlgComponent, AlgSynthesisComponent],
})
export class WorkspaceModule {}
