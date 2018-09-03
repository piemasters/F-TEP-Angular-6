import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPipesModule } from './shared/pipes/custom-pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
