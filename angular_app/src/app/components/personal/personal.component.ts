import { Component } from '@angular/core';
import { Register } from 'src/app/models/register';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [AuthenticationService]
})
export class PersonalComponent {
  register: Register;
  dataUser: any;
  aporte: Aporte;
  usuario: any;
  constructor(private _aporteService: AporteService, private _authenticateService: AuthenticationService) {
    this.register = new Register('', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);
    this.getdata();
  }



  getdata(){
    this._aporteService.getDataUser(this.aporte).subscribe(
      response => {
        this.dataUser = response;
        this.register = this.dataUser;
      }
    )
  }

  onSubmit(form: any) {
    Swal.fire({
      title: '¿Esta seguro de actualizar sus datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._authenticateService.updateUser(this.register).subscribe(
          response => {
            if (response != 'error') {
              Swal.fire('Datos actualizados!', '', 'success')
              this.getdata();
            } else {
              Swal.fire('Cambios No Guardados!', '', 'info')
            }
          }, error => {
            Swal.fire('Cambios No Guardados!', '', 'info')
          }
        )
      } else if (result.isDenied) {
        Swal.fire('Cambios No Guardados!', '', 'info')
      }
    })
  }
}
