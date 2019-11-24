import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutes} from "./app.routing";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, {useHash: true}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
