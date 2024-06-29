import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from '../hero/list/list.component';


@NgModule({
  declarations: [
    DbzMainPageComponent,
ListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
