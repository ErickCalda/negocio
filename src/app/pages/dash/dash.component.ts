import { Component } from '@angular/core';
import { ServiceEstadoService } from '../servicio_stados/service-estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
  userName: string = '';
  userCorreo: string = '';
  userSaldo: number =0

  constructor(private userService: ServiceEstadoService,
 
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.userService.getUser();


    if (user) {
      this.userName = user.nombre;
      this.userCorreo = user.correo;
      this.userSaldo = user.saldo
    
    } else {
      console.error('No hay usuario iniciado sesión.');
    }
  }


  cerrarSesion(): void {
    this.userService.clearUser(); // Limpia el estado del usuario
    this.router.navigate(['/login']); // Redirige al componente de inicio de sesión
  }

}




