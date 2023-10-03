import { Component } from '@angular/core';
import { Register } from 'src/app/models/register';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  register: Register;
  dataUser: any;
  aporte: Aporte;
  usuario: any;
  constructor(private _aporteService: AporteService) {
    this.register = new Register('', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);

    this._aporteService.getDataUser(this.aporte).subscribe(
      response => {
        this.dataUser = response;
        this.register = this.dataUser;
        console.log("agg")
        console.log(response);
        console.log(this.aporte);
      }
    )
  }


  onSubmit(form: any) {

  }
}
