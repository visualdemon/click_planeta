import { Component, Inject } from '@angular/core';
import { Aporte } from 'src/app/models/aporte';
import { AporteService } from 'src/app/services/aporte.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

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
  constructor(private _aporteService: AporteService, @Inject(MAT_DIALOG_DATA) public data: any) {
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

  onSubmit(form: any) {
    Swal.fire({
      icon: 'question',
      title: 'Desea Actualizar los datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._aporteService.updateClick03(this.aporte).subscribe(
          response => {
            Swal.fire('Actualizado!', '', 'success').then(
              () => {
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }
            )
            console.log(response)
          }, error => {
            Swal.fire('Datos No Actualizados', '', 'info')
            console.log(error)
          }
        )
      } else {
        Swal.fire('Datos No Actualizados', '', 'error')
      }
    })
  }


  delete(form: any) {
    Swal.fire({
      icon: 'question',
      title: 'Desea Eliminar los datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._aporteService.deleteClick03(this.aporte).subscribe(
          response => {
            Swal.fire('Eliminado!', '', 'success').then(
              () => {
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }
            )
            console.log(response)
          }, error => {
            Swal.fire('Datos No Eliminados', '', 'info')
            console.log(error)
          }
        )
      } else {
        Swal.fire('Datos No Eliminados', '', 'error')
      }
    })
  }

}
