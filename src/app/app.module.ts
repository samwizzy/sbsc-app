import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { httpInterceptorProviders } from './core/interceptors';
import { ChildComponent } from './child/child.component';
import { ParantComponent } from './parant/parant.component';
import { ThankYouComponent } from './modules/thank-you/thank-you.component';
import { LongformComponent } from './modules/longform/longform.component';
import { ActionsComponent } from './modules/actions/actions.component';
import { TodoDetailsComponent } from './modules/todo-details/todo-details.component';

@NgModule({
  declarations: [AppComponent, ParantComponent, ChildComponent, ThankYouComponent, LongformComponent, ActionsComponent, TodoDetailsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
  ],
  providers: [...httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
