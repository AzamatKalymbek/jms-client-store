import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkspaceComponent} from './workspace.component';
import {WorkspaceRoutingModule} from './workspace-routing.module';
import {FormsModule} from "@angular/forms";
import { KmeanComponent } from './kmean/kmean.component';
import { MaxminComponent } from './maxmin/maxmin.component';
import { AvoComponent } from './avo/avo.component';

@NgModule({
    imports: [
        CommonModule,
        WorkspaceRoutingModule,
        FormsModule,
    ],
    declarations: [WorkspaceComponent, KmeanComponent, MaxminComponent, AvoComponent],
})
export class WorkspaceModule {}
