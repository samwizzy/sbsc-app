import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlaygroundComponent }]),
  ],
})
export class PlaygroundModule {}
