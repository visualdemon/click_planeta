import { Component, ElementRef, ViewChild } from '@angular/core';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-imagecertificado',
  templateUrl: './imagecertificado.component.html',
  styleUrls: ['./imagecertificado.component.css']
})
export class ImagecertificadoComponent {

  @ViewChild('myData') myData!: ElementRef;

  dataUser: any;
  aporte: Aporte;
  usuario: any;
  data: any = [];
  bandera: any = false;
  constructor(private _aporteService: AporteService) {
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);

    this._aporteService.getData(this.aporte).subscribe(
      response => {
        this.data = response;
      }
    )



  }

  generar() {

    this.bandera = true;
    this.setPdf();
    setTimeout(() => {
      this.bandera = false;
    }, 150);



  }


  setPdf() {
    setTimeout(() => {
      const data = this.myData.nativeElement;
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4'
      });
      html2canvas(data).then(canvas => {
        const imgWidth = 1100;
        const imgHeight = canvas.height * imgWidth / canvas.width ;
        const contentDataURL = canvas.toDataURL('image/png');
        doc.addImage(contentDataURL, 'PNG', 35, 20, imgWidth, imgHeight);
        doc.save('certificado.pdf');
        doc.output('dataurlnewwindow');
      })
    }, 100);
  }
}
