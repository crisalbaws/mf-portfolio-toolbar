import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { map, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [MatMenuModule, CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, RouterModule, MatToolbarModule],
})
export class ToolbarComponent {
  openedSideBar: boolean = false;
  isLargeScreen$: Observable<boolean>;
  isSmallScreen$: Observable<boolean>;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.isLargeScreen$ = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.XLarge, Breakpoints.Large])
      .pipe(map(result => result.matches));

    this.isSmallScreen$ = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map(result => result.matches));

  }
  navigate(url: string) {
  }
  changePassword() {
    this.router.navigate(['/change-password']);
  }
  logout() {
    this.router.navigate(['/angular/curriculum']);
  }
  show(): boolean {
    let isCV = this.router.url.includes('curriculum');
    if (isCV) {
      this.openedSideBar = false;
    }
    return !isCV;
  }
  goToPWA() {
    window.open('https://crisalbaws.github.io/ticket-todo-managment/');
  }
  getApp() {
    window.open('https://portfolio-caaws-public.s3.us-east-1.amazonaws.com/apps/porfolio/ionicDemo.apk');
  }
}
