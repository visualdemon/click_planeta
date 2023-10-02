import { Component } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {


  usuario: any;
  constructor(){
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
   
  }
}
