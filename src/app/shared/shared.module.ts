import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CardComponent } from './components/card/card.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    FlexContainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule

  ],
  exports: [
    PageHeaderComponent,
    CardComponent
  ]
})
export class SharedModule { }
