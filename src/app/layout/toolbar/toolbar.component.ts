import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [MatMenuModule, CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, RouterModule, MatToolbarModule],
})
export class ToolbarComponent {
  openedSideBar: boolean = false;
  constructor(private router: Router) {
   }
  navigate(url: string) {
  }
  changePassword() {
    this.router.navigate(['/change-password']);
    console.log('Navegando a cambiar contraseña');
  }
  logout() {
    this.router.navigate(['/angular/curriculum']);
  }
  show(): boolean {
    return !this.router.url.includes('curriculum');
  }
}
