import { Component } from '@angular/core';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css'],
  providers: [AporteService]
})
export class CertificadoComponent {
  dataUser: any;
  aporte: Aporte;
  usuario: any;
  data: any = [];
  constructor(private _aporteService: AporteService) {
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);

    this._aporteService.getData(this.aporte).subscribe(
      response => {
        this.data = response;
      }
    )



  }
}
