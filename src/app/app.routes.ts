import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'dash',loadChildren:() => import('./pages/dashuser/dashuser.module').then ((m)=>m.DashuserModule) },
    {path:'dashadmin',loadChildren:()=>import('./pages/dash-admin-modulo/dash-admin-modulo.module').then((m)=>m.DashAdminModuloModule)}
];
