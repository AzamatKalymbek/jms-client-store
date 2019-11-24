import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            loadChildren: './main/features/workspace/workspace.module#WorkspaceModule'
        }]
    }
];
