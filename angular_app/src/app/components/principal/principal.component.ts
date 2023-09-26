import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
import { MatDialog } from '@angular/material/dialog';
import { ModaledithComponent } from 'src/app/modaledith/modaledith.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [AporteService]
})

export class PrincipalComponent implements OnInit {
  nombre: any = '';
  bombillas: any = 0;
  chart: any;
  chart2: any;
  chart3: any;
  aportes: any = 0;
  gigabytes: any = 0;
  registros: any = [];
  aporte: Aporte;
  usuario: any;
  constructor(private _aporteService: AporteService, public dialog: MatDialog) {

    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    console.log(this.usuario);
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);
    this._aporteService.getClick03(this.aporte).subscribe(
      response => {
        this.registros = response;
      }
    )
  }
  ngOnInit(): void {
    this.createChart();
    this.createChart2();
    this.createChart3();
  }



  openModal(dt:any) {
    const dialogRef = this.dialog.open(ModaledithComponent, {
      data: dt,
      width: '5000px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`El modal se cerró con resultado: ${result}`);
    });
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  createChart2() {

    this.chart2 = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  createChart3() {

    this.chart3 = new Chart("MyChart3", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }


  delete(dt:any) {
    Swal.fire({
      icon: 'question',
      title: 'Desea Eliminar los datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._aporteService.deleteClick03(dt).subscribe(
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
