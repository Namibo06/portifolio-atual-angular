import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ProjectModule } from './pages/project/project.module';
import { FaqModule } from './pages/faq/faq.module';
import { HeaderModule } from './shared/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProjectModule,
    FaqModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
