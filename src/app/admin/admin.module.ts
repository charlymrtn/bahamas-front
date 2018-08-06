import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-router.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TaskInboxComponent } from './task-inbox/task-inbox.component';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [SharedModule, FormsModule, AdminRoutingModule, LayoutModule],
  declarations: [NavbarComponent, RegisterComponent, TaskInboxComponent]
})
export class AdminModule { }
