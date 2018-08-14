import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TaskInboxComponent } from './task-inbox/task-inbox.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { NotificationsMenuComponent } from './notifications-menu/notifications-menu.component';
import { StepperContentComponent } from './register/stepper-content/stepper-content.component';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule, AdminRoutingModule, LayoutModule],
  declarations: [
    NavbarComponent,
    RegisterComponent,
    TaskInboxComponent,
    LoginMenuComponent,
    NotificationsMenuComponent,
    StepperContentComponent
  ]
})
export class AdminModule { }
