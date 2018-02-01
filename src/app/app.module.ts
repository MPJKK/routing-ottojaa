import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import {TopBarComponent} from './top-bar/top-bar.component';
import {AgmCoreModule} from '@agm/core';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material';
import {ServiceComponent} from './service/service.component';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        RouteDirectionPipe,
        ServiceComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        MatTabsModule,
        ServiceComponent,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBpjktY-18X3EvQDdzIFV3s2sgRBqRpZ9w'
        })
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
