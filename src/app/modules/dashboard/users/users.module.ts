import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UserDialogModule } from 'src/app/shared/components/user-dialog/user-dialog.module';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, UserDialogModule],
})
export class UsersModule {}
