import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../dash/dash.component';
import { routes } from '../../app.routes';

const router : Routes=[

  
  {path:'dash', component:DashComponent}

]



@NgModule({
  declarations: [],
  imports:[CommonModule,
    RouterModule.forChild(router)
  ],
  exports:[RouterModule]
})
export class DashuserModule { }
