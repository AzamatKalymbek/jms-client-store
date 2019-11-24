import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
    styles: [`
        html {
          background: white;
        }
    `]
})
export class AppComponent {

    constructor() {
    }
}
