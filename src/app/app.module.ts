import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VVdirectiveDirective } from './vvdirective.directive';
import { VvdivComponent } from './vvdiv/vvdiv.component';

@NgModule({
  declarations: [
    AppComponent,
    VVdirectiveDirective,
    VvdivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
