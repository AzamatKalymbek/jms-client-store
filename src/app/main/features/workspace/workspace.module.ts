import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkspaceComponent} from './workspace.component';
import {WorkspaceRoutingModule} from './workspace-routing.module';

@NgModule({
    imports: [
        CommonModule,
        WorkspaceRoutingModule,
    ],
    declarations: [WorkspaceComponent],
})
export class WorkspaceModule {}
