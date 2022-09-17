import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {MatIconModule} from '@angular/material/icon';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, "./assets/i18n/",".json");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    TranslateModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class SharedModule { }
