import { NgModule } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [LayoutModule],
  exports: [AuthComponent],
  declarations: [AuthComponent]
})
export class CoreModule { }
