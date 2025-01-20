import { NgModule } from '@angular/core';
import { INITIAL_CONFIG, ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    // { provide: INITIAL_CONFIG, useValue: { absoluteUrl: true, baseUrl: 'http://localhost:3001' } },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
