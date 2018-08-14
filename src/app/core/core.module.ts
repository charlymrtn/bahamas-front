import { NgModule } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LayoutModule, SharedModule],
  exports: [AuthComponent],
  declarations: [AuthComponent]
})
export class CoreModule { }
