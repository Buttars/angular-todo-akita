import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : [ AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot() ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }