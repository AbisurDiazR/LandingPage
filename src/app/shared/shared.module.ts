import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, "./assets/i18n/",".json");
}

@NgModule({
  declarations: [
    ClientDialogComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    TranslateModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
