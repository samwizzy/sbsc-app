import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { SquareComponent } from './square/square.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BoardComponent } from './board/board.component';

const routes: Routes = [{ path: '', component: TicTacToeComponent }];

@NgModule({
  declarations: [TicTacToeComponent, SquareComponent, BoardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class TicTacToeModule {}
