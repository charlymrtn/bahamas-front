import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDatepickerModule,
  MatSelectModule,
  MatTableModule,
  MatBadgeModule,
  MatMenuModule,
  MatStepperModule,
  MatTabsModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatBadgeModule,
    MatStepperModule,
    MatTabsModule,
    LayoutModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatBadgeModule,
    MatStepperModule,
    MatTabsModule,
    LayoutModule
  ],
  declarations: []
})
export class SharedModule {}
