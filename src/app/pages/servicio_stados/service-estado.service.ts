import { Injectable } from '@angular/core';



interface User {
  nombre: string;
  correo: string;
  saldo: number; // Asegúrate de que saldo esté siempre presente
}

@Injectable({
  providedIn: 'root'
})

export class ServiceEstadoService {


  constructor() {
    const storedUser = sessionStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;
  }

  private user: User | null = null;

  // Método para almacenar el usuario con saldo
  setUser(user: User): void {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // Método para recuperar el usuario con saldo
  getUser(): User | null {
    if (!this.user) {
      const storedUser = sessionStorage.getItem('user');
      this.user = storedUser ? JSON.parse(storedUser) : null;
    }
    return this.user;
  }
  

  clearUser(): void {
    this.user = null;
    sessionStorage.removeItem('user');
  }

}
