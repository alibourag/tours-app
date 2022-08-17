import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleTourComponent } from "./single-tour/single-tour.component";
import { ToursListComponent } from "./tours-list/tours-list.component";

const routes : Routes = [
    {path : 'tours/:id', component : SingleTourComponent},
    {path : 'tours', component : ToursListComponent},
    {path : "", component : LandingPageComponent},
    {path: 'search/:searchTerm', component:LandingPageComponent}
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports:[  RouterModule  ]
})
export class AppRoutingModule{}