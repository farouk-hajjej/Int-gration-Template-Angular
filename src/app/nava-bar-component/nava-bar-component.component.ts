import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nava-bar-component',
  templateUrl: './nava-bar-component.component.html',
  styleUrls: ['./nava-bar-component.component.css']
})
export class NavaBarComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
