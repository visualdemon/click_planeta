import { Component } from '@angular/core';
import { Aporte } from 'src/app/models/aporte';
import { AporteService } from 'src/app/services/aporte.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-aporte',
  templateUrl: './aporte.component.html',
  styleUrls: ['./aporte.component.css'],
  providers: [AporteService]
})
export class AporteComponent {

  aporte: Aporte;
  aplicativos: any = [];
  medidas: any = [];
  usuario: any;
  constructor(private _aporteService: AporteService) {
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    console.log(this.usuario);
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);
    this._aporteService.getClick01(this.aporte).subscribe(
      response => {
        this.aplicativos = response;
      }
    )
    this._aporteService.getClick02(this.aporte).subscribe(
      response => {
        this.medidas = response;
      }
    )


  }
  onSubmit(form: any) {

    console.log("datos!");
    console.log(this.aporte);

    if (this.aporte.c_click01 > 0) {
      if (this.aporte.c_click02 > 0) {
        Swal.fire({
          icon: 'question',
          title: 'Desea guardar los datos?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Si',
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            this._aporteService.register(this.aporte).subscribe(
              response => {
                Swal.fire('Guardado!', '', 'success').then(
                  () => {
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }
                )
                console.log(response)
              }, error => {
                Swal.fire('Datos No Guardados', '', 'info')
                console.log(error)
              }
            )
          } else if (result.isDenied) {
            Swal.fire('Datos No Guardados', '', 'info')
          }
        })
      } else {
        Swal.fire('La cantidad de espacio no debe ser igual a 0', '', 'info')
      }
    } else {
      Swal.fire('La cantidad de archivos no debe ser igual a 0', '', 'info')
    }



  }
}
