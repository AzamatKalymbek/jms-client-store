import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkspaceComponent} from './workspace.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: WorkspaceComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule {

}
