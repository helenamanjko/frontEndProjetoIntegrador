import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    public auth: AuthService, 
    private router: Router) {}

  ngOnInit() {}

  sair() {
    this.router.navigate(['/login']);

    environment.token = '';
    environment.nome = '';
    environment.id = 0;
  }
}
