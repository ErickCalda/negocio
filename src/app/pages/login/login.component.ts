import { Component } from '@angular/core';
import { AmazonService } from '../servicio_login/service.service';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceEstadoService } from '../servicio_stados/service-estado.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,NgFor,NgIf],
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  isRegister = false;
  email: string = '';
  password: string = '';
  name: string = '';

  // Credenciales del administrador
  private adminCredentials = {
    email: 'admin@gmail.com',
    password: '12345',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private amazonService: AmazonService,
    private userService: ServiceEstadoService
  ) {}

  // Método para iniciar sesión
  login(): void {
    const { email, password } = this;

    if (!email || !password) {
      alert('El correo y la contraseña son obligatorios.');
      return;
    }

    // Verificar si las credenciales son del administrador
    if (email === this.adminCredentials.email && password === this.adminCredentials.password) {
      alert('Inicio de sesión como administrador exitoso.');
      this.router.navigate(['/dashadmin/&$']); // Ruta para el administrador
      return;
    }

    // Buscar en la lista de usuarios
    this.amazonService.getAll().subscribe(
      (users: any[]) => {
        const user = users.find(
          (u) => u.correo === email && u.clave === password
        );

        if (user) {
          this.userService.setUser({
            nombre: user.usuario,
            correo: user.correo,
            saldo: parseFloat(user.saldo.$numberDecimal),
          });
          alert('Inicio de sesión exitoso.');
          this.router.navigate(['/dash/dash']); // Ruta para el usuario normal
        } else {
          alert('Usuario o contraseña incorrectos.');
        }
      },
      (error) => {
        console.error('Error al buscar usuario:', error);
        alert('Ocurrió un error al iniciar sesión. Intenta de nuevo.');
      }
    );
  }



  registerUser(): void {
    const { name, email, password } = this;
  
    // Verificar que todos los campos estén completos
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Verificar si el correo ya está registrado
    this.amazonService.getAll().subscribe(
      (users: any[]) => {
        const existingUser = users.find((u) => u.correo === email);
  
        if (existingUser) {
          alert('El correo electrónico ya está registrado.');
          return;
        }
  
        // Crear nuevo usuario
        const newUser = {
          nombre: name,
          correo: email,
          clave: password, // Asegúrate de usar el nombre correcto del campo para la clave
          saldo: 0,       // Inicializar el saldo, si aplica
        };
  
        this.amazonService.create(newUser).subscribe({
          next: () => {
            alert('Usuario registrado exitosamente.');
            this.toggleForm(); // Alternar al formulario de login después del registro
          },
          error: (err) => {
            console.error('Error al registrar el usuario:', err);
            alert('Ocurrió un error al registrar el usuario. Por favor, inténtelo de nuevo.');
          },
        });
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
        alert('Ocurrió un error al registrar el usuario. Por favor, inténtelo de nuevo.');
      }
    );
  }
  

  // Método para alternar entre login y registro
  toggleForm() {
    this.isRegister = !this.isRegister;
  }
}
