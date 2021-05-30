import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = 'SENA';


  roles: string[];


  constructor(
    private router: Router) {}

  ngOnInit() {
    
  }

  
}
