import { Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { loginComponent } from './Login/logincomponent';
import { aboutusComponent } from './AboutUs/aboutuscomponent';
import { privatecomponent } from './PrivateComponent/privatecomponent';


export const routes: Routes = [
    { path: '**',  redirectTo: '/deals', pathMatch: 'full' },    
    { path: "aboutus", component: aboutusComponent },
    { path: "deals", component: privatecomponent }
];