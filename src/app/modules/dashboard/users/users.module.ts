import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule],
})
export class UsersModule {}
