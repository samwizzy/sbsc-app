import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule, NavbarModule, FooterModule],
})
export class HomeModule {}
