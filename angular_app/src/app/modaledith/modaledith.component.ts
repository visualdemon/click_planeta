import { Component, Inject } from '@angular/core';
import { Aporte } from 'src/app/models/aporte';
import { AporteService } from 'src/app/services/aporte.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modaledith',
  templateUrl: './modaledith.component.html',
  styleUrls: ['./modaledith.component.css'], providers: [AporteService]
})
export class ModaledithComponent {
  aporte: Aporte;
  aplicativos: any = [];
  medidas: any = [];
  usuario: any;
  constructor(private _aporteService: AporteService, @Inject(MAT_DIALOG_DATA) public data: any){  
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);
    this._aporteService.getClick01(this.aporte).subscribe(
      response => {
        this.aplicativos = response;
        this._aporteService.getClick02(this.aporte).subscribe(
          response => {
            this.medidas = response;
            this.aporte = this.data;
          }
        )
      }
    )


    

  }
  onSubmit(form:any){

  }
}
