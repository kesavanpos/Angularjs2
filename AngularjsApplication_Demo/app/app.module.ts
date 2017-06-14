import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { loginComponent } from './Login/logincomponent';
import { aboutusComponent } from './AboutUs/aboutuscomponent';
import { RouterModule} from '@angular/router';  
import { routes } from './app.route';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common'; 
import { HttpModule } from '@angular/http';
import { privatecomponent } from './PrivateComponent/privatecomponent';
import { DealService } from './service/dealservice';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule],
    declarations: [AppComponent, aboutusComponent, privatecomponent],
    bootstrap: [AppComponent],
    providers: [DealService]
    //providers: [{ provide: APP_BASE_HREF, useValue: '/' }]  
    })

export class AppModule { } 