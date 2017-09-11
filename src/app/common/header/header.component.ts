import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

    codsys:String;

    constructor(private router: Router) {
        this.codsys = sessionStorage.getItem('codsys');
    }

    ngOnInit() {
    }

    salir(){
        sessionStorage.removeItem('codsys');
        window.location.pathname = "/";
        //this.router.navigate(['/']);
    }

}
