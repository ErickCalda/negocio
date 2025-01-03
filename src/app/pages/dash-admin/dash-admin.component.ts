import { Component, OnInit } from '@angular/core';
import { AmazonService } from '../servicio_login/service.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports:[FormsModule, NgFor, NgIf],
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null; // Inicializado como null para no mostrar el modal al cargar la página
  newBalance: number = 0; // Para almacenar el nuevo saldo en el modal

  constructor(private amazonService: AmazonService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers(); // Llamada al servicio para obtener usuarios
  }


  logout() {
    // Borrar datos de sesión (ej. token o datos almacenados en el localStorage)
  // Asegúrate de usar el nombre correcto de tu token
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  loadUsers(): void {
    this.amazonService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log('Usuarios obtenidos:', data);
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  selectUser(user: any): void {
    this.selectedUser = user; // Cuando se selecciona un usuario, se asigna a selectedUser
  }

  updateSaldoById(userId: string, newSaldo: number): void {
    console.log('selectedUser:', this.selectedUser); // Esto debería mostrar el usuario completo con su id

    if (!userId) {
      console.error('ID de usuario no válido');
      return;
    }

    const updateData = { saldo: newSaldo };

    this.amazonService.update(userId, updateData).subscribe(
      (response) => {
        console.log(`Saldo del usuario con ID ${userId} actualizado a ${newSaldo}`, response);
        this.ngOnInit();

        const userIndex = this.users.findIndex((user) => user._id === userId);
        if (userIndex !== -1) {
          this.users[userIndex].saldo = newSaldo;
        }
      },
      (error) => {
        console.error('Error al actualizar el saldo:', error);
      }
    );
  }

  // Eliminar usuario
  deleteUser(id: string): void {
    this.amazonService.delete(id).subscribe(
      (response) => {
        console.log('Usuario eliminado:', response);
        // Eliminar el usuario de la lista local
        this.users = this.users.filter((user) => user._id !== id);
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}
