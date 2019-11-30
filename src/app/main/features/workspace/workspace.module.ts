import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkspaceComponent} from './workspace.component';
import {WorkspaceRoutingModule} from './workspace-routing.module';
import {FormsModule} from "@angular/forms";
import { KmeanComponent } from './cartesian/kmean/kmean.component';
import { MaxminComponent } from './cartesian/maxmin/maxmin.component';
import { AvoComponent } from './cartesian/avo/avo.component';
import { ReduceComponent } from './cartesian/reduce/reduce.component';
import { AlgComponent } from './alg/alg.component';
import { AlgSynthesisComponent } from './alg-synthesis/alg-synthesis.component';
import { AlgMultDComponent } from './alg-mult-d/alg-mult-d.component';
import { AvoTableComponent } from './tables/avo-table/avo-table.component';
import { KmeanTableComponent } from './tables/kmean-table/kmean-table.component';
import { ReduceTableComponent } from './tables/reduce-table/reduce-table.component';
import { MaxminTableComponent } from './tables/maxmin-table/maxmin-table.component';

@NgModule({
    imports: [
        CommonModule,
        WorkspaceRoutingModule,
        FormsModule,
    ],
    declarations: [WorkspaceComponent, KmeanComponent, MaxminComponent, AvoComponent, ReduceComponent, AlgComponent, AlgSynthesisComponent, AlgMultDComponent, AvoTableComponent, KmeanTableComponent, ReduceTableComponent, MaxminTableComponent],
})
export class WorkspaceModule {}
