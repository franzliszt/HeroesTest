import { Component } from "@angular/core";

// Denne komponenten kan kalles RouterComponent
// fordi denne er festet til en router
// og viser routed views.
@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls:["app.component.css"]
})
export class AppComponent {
    title = 'Tour of Heroes (app component)';
}