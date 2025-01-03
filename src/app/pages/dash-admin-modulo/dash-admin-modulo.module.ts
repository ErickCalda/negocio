import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashAdminComponent } from '../dash-admin/dash-admin.component';


const routes: Routes=[

  {path:'', redirectTo:'&$',pathMatch:'full'},
  {path:'&$',component:DashAdminComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashAdminModuloModule { }
